const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Joi = require('joi');
const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY || 'your-secret-api-key-change-this';

// Path to the blog data file
const BLOG_DATA_PATH = process.env.NODE_ENV === 'production' 
  ? path.join('/app/blog-data/blogs.js')
  : path.join(__dirname, '../horizons-export-5256eb34-abc9-40f5-81df-ce06306196f9/src/data/blogs.js');

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// API Key middleware
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.query.apiKey;
  
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      success: false,
      error: 'Invalid or missing API key'
    });
  }
  
  next();
};

// Blog post validation schema
const blogPostSchema = Joi.object({
  title: Joi.string().required().min(5).max(200),
  excerpt: Joi.string().required().min(10).max(500),
  content: Joi.string().required().min(50),
  author: Joi.string().optional().default('Setidure Technologies Team'),
  tags: Joi.array().items(Joi.string()).optional().default([]),
  featured: Joi.boolean().optional().default(false),
  image: Joi.string().uri().optional().default('/api/placeholder/800/400')
});

// Utility functions
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const readBlogData = async () => {
  try {
    const fileContent = await fs.readFile(BLOG_DATA_PATH, 'utf8');
    
    // Extract the blogs array from the JavaScript file
    const blogsMatch = fileContent.match(/export const blogs = (\[[\s\S]*?\]);/);
    if (!blogsMatch) {
      throw new Error('Could not parse blogs array from file');
    }
    
    // Use eval to parse the array (in production, consider using a proper parser)
    const blogsArray = eval(blogsMatch[1]);
    return blogsArray;
  } catch (error) {
    console.error('Error reading blog data:', error);
    return [];
  }
};

const writeBlogData = async (blogs) => {
  try {
    // Read the current file to preserve other exports
    const fileContent = await fs.readFile(BLOG_DATA_PATH, 'utf8');
    
    // Create the new blogs array string
    const blogsString = JSON.stringify(blogs, null, 2)
      .replace(/"(\w+)":/g, '$1:') // Remove quotes from property names
      .replace(/"/g, "'") // Replace double quotes with single quotes
      .replace(/'(\$\{[^}]+\})'/g, '$1'); // Fix template literals
    
    // Replace the blogs array in the file
    const newFileContent = fileContent.replace(
      /export const blogs = \[[\s\S]*?\];/,
      `export const blogs = ${blogsString};`
    );
    
    await fs.writeFile(BLOG_DATA_PATH, newFileContent, 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing blog data:', error);
    return false;
  }
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Blog API is running',
    timestamp: new Date().toISOString()
  });
});

// Get all blog posts
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await readBlogData();
    res.json({
      success: true,
      data: blogs,
      count: blogs.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog posts'
    });
  }
});

// Get single blog post by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blogs = await readBlogData();
    const blog = blogs.find(b => b.slug === req.params.slug);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }
    
    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog post'
    });
  }
});

// Create new blog post
app.post('/api/blogs', authenticateApiKey, async (req, res) => {
  try {
    // Validate request body
    const { error, value } = blogPostSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.details.map(d => d.message)
      });
    }
    
    // Read existing blogs
    const blogs = await readBlogData();
    
    // Generate new blog post
    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      title: value.title,
      slug: generateSlug(value.title),
      excerpt: value.excerpt,
      content: value.content,
      author: value.author,
      publishDate: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(value.content),
      tags: value.tags,
      featured: value.featured,
      image: value.image
    };
    
    // Check if slug already exists
    if (blogs.some(b => b.slug === newBlog.slug)) {
      newBlog.slug = `${newBlog.slug}-${Date.now()}`;
    }
    
    // Add new blog to array
    blogs.push(newBlog);
    
    // Write back to file
    const writeSuccess = await writeBlogData(blogs);
    if (!writeSuccess) {
      throw new Error('Failed to write blog data');
    }
    
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newBlog
    });
    
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create blog post'
    });
  }
});

// Update existing blog post
app.put('/api/blogs/:id', authenticateApiKey, async (req, res) => {
  try {
    const blogId = parseInt(req.params.id);
    
    // Validate request body
    const { error, value } = blogPostSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.details.map(d => d.message)
      });
    }
    
    // Read existing blogs
    const blogs = await readBlogData();
    const blogIndex = blogs.findIndex(b => b.id === blogId);
    
    if (blogIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }
    
    // Update blog post
    const updatedBlog = {
      ...blogs[blogIndex],
      title: value.title,
      slug: generateSlug(value.title),
      excerpt: value.excerpt,
      content: value.content,
      author: value.author,
      readTime: calculateReadTime(value.content),
      tags: value.tags,
      featured: value.featured,
      image: value.image
    };
    
    blogs[blogIndex] = updatedBlog;
    
    // Write back to file
    const writeSuccess = await writeBlogData(blogs);
    if (!writeSuccess) {
      throw new Error('Failed to write blog data');
    }
    
    res.json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedBlog
    });
    
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update blog post'
    });
  }
});

// Delete blog post
app.delete('/api/blogs/:id', authenticateApiKey, async (req, res) => {
  try {
    const blogId = parseInt(req.params.id);
    
    // Read existing blogs
    const blogs = await readBlogData();
    const blogIndex = blogs.findIndex(b => b.id === blogId);
    
    if (blogIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }
    
    // Remove blog post
    const deletedBlog = blogs.splice(blogIndex, 1)[0];
    
    // Write back to file
    const writeSuccess = await writeBlogData(blogs);
    if (!writeSuccess) {
      throw new Error('Failed to write blog data');
    }
    
    res.json({
      success: true,
      message: 'Blog post deleted successfully',
      data: deletedBlog
    });
    
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete blog post'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog API server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API Key required for write operations: ${API_KEY}`);
});

module.exports = app;