# Setidure Technologies Blog API

A RESTful API for managing blog posts on the Setidure Technologies website.

## 🚀 Quick Start

### Installation

```bash
cd blog-api
npm install
```

### Configuration

1. Copy `.env.example` to `.env`
2. Update the API key and other settings
3. Start the server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## 📡 API Endpoints

Base URL: `http://localhost:3001`

### Authentication

All write operations (POST, PUT, DELETE) require an API key. Include it in the request header:

```
X-API-Key: your-api-key-here
```

Or as a query parameter:
```
?apiKey=your-api-key-here
```

### Endpoints

#### Health Check
```http
GET /health
```

#### Get All Blog Posts
```http
GET /api/blogs
```

#### Get Single Blog Post
```http
GET /api/blogs/:slug
```

#### Create New Blog Post
```http
POST /api/blogs
Content-Type: application/json
X-API-Key: your-api-key-here

{
  "title": "Your Blog Post Title",
  "excerpt": "A brief description of your blog post",
  "content": "Full blog content in markdown format...",
  "author": "Author Name",
  "tags": ["Technology", "AI", "Innovation"],
  "featured": false,
  "image": "https://example.com/image.jpg"
}
```

#### Update Blog Post
```http
PUT /api/blogs/:id
Content-Type: application/json
X-API-Key: your-api-key-here

{
  "title": "Updated Blog Post Title",
  "excerpt": "Updated description",
  "content": "Updated content...",
  "author": "Author Name",
  "tags": ["Updated", "Tags"],
  "featured": true,
  "image": "https://example.com/new-image.jpg"
}
```

#### Delete Blog Post
```http
DELETE /api/blogs/:id
X-API-Key: your-api-key-here
```

## 📝 Request Examples

### Using cURL

#### Create a new blog post:
```bash
curl -X POST http://localhost:3001/api/blogs \
  -H "Content-Type: application/json" \
  -H "X-API-Key: setidure-blog-api-key-2024-secure" \
  -d '{
    "title": "The Future of Quantum Computing in AI",
    "excerpt": "Exploring how quantum computing will revolutionize artificial intelligence and machine learning applications.",
    "content": "# The Future of Quantum Computing in AI\n\nQuantum computing represents a paradigm shift...",
    "author": "Dr. Jane Smith",
    "tags": ["Quantum Computing", "AI", "Technology", "Future"],
    "featured": true,
    "image": "https://example.com/quantum-ai.jpg"
  }'
```

#### Get all blog posts:
```bash
curl http://localhost:3001/api/blogs
```

#### Get a specific blog post:
```bash
curl http://localhost:3001/api/blogs/future-quantum-computing-ai
```

### Using JavaScript/Fetch

```javascript
// Create a new blog post
const createBlogPost = async (blogData) => {
  try {
    const response = await fetch('http://localhost:3001/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'setidure-blog-api-key-2024-secure'
      },
      body: JSON.stringify(blogData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Blog post created:', result.data);
    } else {
      console.error('Error:', result.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

// Example usage
const newBlog = {
  title: "Implementing AI in Small Businesses",
  excerpt: "A practical guide to integrating AI solutions in small business operations.",
  content: `
# Implementing AI in Small Businesses

Small businesses today have unprecedented access to AI technologies...

## Getting Started

Here are the key steps to begin your AI journey:

1. **Assess Your Needs**
2. **Choose the Right Tools**
3. **Start Small**
4. **Scale Gradually**

## Conclusion

AI implementation doesn't have to be overwhelming...
  `,
  author: "Business AI Team",
  tags: ["Small Business", "AI Implementation", "Technology"],
  featured: false,
  image: "/api/placeholder/800/400"
};

createBlogPost(newBlog);
```

### Using Python

```python
import requests
import json

# API configuration
API_BASE_URL = "http://localhost:3001"
API_KEY = "setidure-blog-api-key-2024-secure"

def create_blog_post(blog_data):
    url = f"{API_BASE_URL}/api/blogs"
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY
    }
    
    response = requests.post(url, headers=headers, json=blog_data)
    
    if response.status_code == 201:
        result = response.json()
        print("Blog post created successfully!")
        print(f"ID: {result['data']['id']}")
        print(f"Slug: {result['data']['slug']}")
    else:
        print(f"Error: {response.status_code}")
        print(response.json())

# Example blog post
blog_post = {
    "title": "Machine Learning for Predictive Analytics",
    "excerpt": "Learn how to implement machine learning models for business forecasting and predictive analytics.",
    "content": """
# Machine Learning for Predictive Analytics

Predictive analytics powered by machine learning is transforming how businesses make decisions...

## Key Benefits

- **Improved Accuracy**: ML models can identify patterns humans might miss
- **Real-time Insights**: Get predictions as new data arrives
- **Scalability**: Handle large datasets efficiently

## Implementation Steps

1. Data Collection and Preparation
2. Model Selection and Training
3. Validation and Testing
4. Deployment and Monitoring

## Conclusion

Machine learning for predictive analytics offers tremendous value...
    """,
    "author": "ML Engineering Team",
    "tags": ["Machine Learning", "Predictive Analytics", "Data Science"],
    "featured": True,
    "image": "https://example.com/ml-analytics.jpg"
}

create_blog_post(blog_post)
```

## 🔧 Blog Post Schema

### Required Fields
- `title` (string, 5-200 characters)
- `excerpt` (string, 10-500 characters)
- `content` (string, minimum 50 characters)

### Optional Fields
- `author` (string, default: "Setidure Technologies Team")
- `tags` (array of strings, default: [])
- `featured` (boolean, default: false)
- `image` (string URL, default: "/api/placeholder/800/400")

### Auto-generated Fields
- `id` (number, auto-incremented)
- `slug` (string, generated from title)
- `publishDate` (string, current date in YYYY-MM-DD format)
- `readTime` (string, calculated from content length)

## 🔒 Security Features

- API key authentication for write operations
- Rate limiting (100 requests per 15 minutes per IP)
- CORS protection
- Input validation using Joi
- Helmet.js security headers

## 🐳 Docker Integration

Add this service to your docker-compose.yml:

```yaml
blog-api:
  build:
    context: ./blog-api
    dockerfile: Dockerfile
  ports:
    - "3001:3001"
  volumes:
    - ./horizons-export-5256eb34-abc9-40f5-81df-ce06306196f9/src/data:/app/blog-data
  environment:
    - NODE_ENV=production
    - API_KEY=your-production-api-key
  restart: unless-stopped
```

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error description",
  "details": ["Additional error details if applicable"]
}
```

## 🚨 Error Codes

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid API key)
- `404` - Not Found (blog post doesn't exist)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error

## 📞 Support

For API support or questions, contact the development team or refer to the main project documentation.

## 🔄 Changelog

### v1.0.0
- Initial API release
- CRUD operations for blog posts
- API key authentication
- Rate limiting
- Input validation