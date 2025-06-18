// Blog Management Utilities
// This file contains helper functions for managing blog posts

/**
 * Generate a URL-friendly slug from a title
 * @param {string} title - The blog post title
 * @returns {string} - URL-friendly slug
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-'); // Remove leading/trailing hyphens
};

/**
 * Calculate estimated reading time based on content length
 * @param {string} content - The blog post content
 * @returns {string} - Estimated reading time (e.g., "5 min read")
 */
export const calculateReadTime = (content) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

/**
 * Create a new blog post object
 * @param {Object} blogData - Blog post data
 * @returns {Object} - Formatted blog post object
 */
export const createBlogPost = (blogData) => {
  const {
    title,
    excerpt,
    content,
    author = "Setidure Technologies Team",
    tags = [],
    featured = false,
    image = "/api/placeholder/800/400"
  } = blogData;

  // Generate unique ID (in a real app, this would come from a database)
  const id = Date.now();
  
  // Generate slug from title
  const slug = generateSlug(title);
  
  // Calculate reading time
  const readTime = calculateReadTime(content);
  
  // Set publish date to today
  const publishDate = new Date().toISOString().split('T')[0];

  return {
    id,
    title,
    slug,
    excerpt,
    content,
    author,
    publishDate,
    readTime,
    tags,
    featured,
    image
  };
};

/**
 * Template for creating a new blog post
 * Copy this template and fill in your content
 */
export const blogPostTemplate = {
  title: "Your Blog Post Title Here",
  excerpt: "A brief description of your blog post that will appear in the blog listing and social media previews.",
  content: `
# Your Blog Post Title Here

Write your blog content here using markdown-style formatting.

## Section Heading

You can use various formatting options:

- **Bold text** for emphasis
- Regular paragraphs for main content
- Lists for organizing information

### Subsection

Continue with your content...

## Another Section

Add more sections as needed.

### Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your blog post with a conclusion.

Ready to learn more? [Contact us](/contact) to discuss your needs.

---

*Published on [Date will be auto-generated]*
  `,
  author: "Your Name",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false, // Set to true for featured posts
  image: "/api/placeholder/800/400" // Replace with your image URL
};

/**
 * Instructions for adding a new blog post:
 * 
 * 1. Copy the blogPostTemplate above
 * 2. Fill in your content
 * 3. Add the new blog object to the blogs array in /src/data/blogs.js
 * 4. The blog will automatically appear on the blog page
 * 
 * Example:
 * 
 * const newBlog = {
 *   id: 4, // Use next available ID
 *   title: "My New Blog Post",
 *   slug: "my-new-blog-post", // Will be auto-generated if you use createBlogPost()
 *   excerpt: "This is my new blog post about...",
 *   content: `# My New Blog Post\n\nContent goes here...`,
 *   author: "John Doe",
 *   publishDate: "2024-01-20",
 *   readTime: "5 min read", // Will be auto-calculated if you use createBlogPost()
 *   tags: ["Technology", "AI"],
 *   featured: false,
 *   image: "/path/to/your/image.jpg"
 * };
 * 
 * Then add newBlog to the blogs array in blogs.js
 */