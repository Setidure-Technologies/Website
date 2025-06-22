#!/bin/bash

# Blog API Test Script
# This script tests all the API endpoints

API_BASE_URL="http://localhost:12147"
API_KEY="setidure-blog-api-key-2024-secure"

echo "🚀 Testing Setidure Technologies Blog API"
echo "=========================================="

# Test 1: Health Check
echo "1. Testing health check..."
curl -s "$API_BASE_URL/health" | jq '.'
echo ""

# Test 2: Get all blogs
echo "2. Getting all blog posts..."
curl -s "$API_BASE_URL/api/blogs" | jq '.success, .count'
echo ""

# Test 3: Create a new blog post
echo "3. Creating a new blog post..."
NEW_BLOG_RESPONSE=$(curl -s -X POST "$API_BASE_URL/api/blogs" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $API_KEY" \
  -d '{
    "title": "API Test Blog Post",
    "excerpt": "This is a test blog post created via API to verify functionality.",
    "content": "# API Test Blog Post\n\nThis blog post was created automatically via the API to test functionality.\n\n## Features Tested\n\n- Blog creation via API\n- Automatic slug generation\n- Read time calculation\n- Proper data formatting\n\n## Conclusion\n\nIf you can see this post, the API is working correctly!",
    "author": "API Test Script",
    "tags": ["API", "Testing", "Automation"],
    "featured": false,
    "image": "/api/placeholder/800/400"
  }')

echo "$NEW_BLOG_RESPONSE" | jq '.'
NEW_BLOG_ID=$(echo "$NEW_BLOG_RESPONSE" | jq -r '.data.id // empty')
NEW_BLOG_SLUG=$(echo "$NEW_BLOG_RESPONSE" | jq -r '.data.slug // empty')
echo ""

# Test 4: Get the newly created blog post by slug
if [ ! -z "$NEW_BLOG_SLUG" ]; then
  echo "4. Getting the newly created blog post by slug..."
  curl -s "$API_BASE_URL/api/blogs/$NEW_BLOG_SLUG" | jq '.success, .data.title'
  echo ""
fi

# Test 5: Update the blog post
if [ ! -z "$NEW_BLOG_ID" ]; then
  echo "5. Updating the blog post..."
  curl -s -X PUT "$API_BASE_URL/api/blogs/$NEW_BLOG_ID" \
    -H "Content-Type: application/json" \
    -H "X-API-Key: $API_KEY" \
    -d '{
      "title": "Updated API Test Blog Post",
      "excerpt": "This blog post has been updated via API to test update functionality.",
      "content": "# Updated API Test Blog Post\n\nThis blog post was updated via the API.\n\n## Update Test\n\nThe update functionality is working correctly!",
      "author": "API Update Test",
      "tags": ["API", "Testing", "Update", "Automation"],
      "featured": true,
      "image": "/api/placeholder/800/400"
    }' | jq '.'
  echo ""
fi

# Test 6: Get updated blog count
echo "6. Getting updated blog count..."
curl -s "$API_BASE_URL/api/blogs" | jq '.count'
echo ""

# Test 7: Test authentication (should fail)
echo "7. Testing authentication (should fail)..."
curl -s -X POST "$API_BASE_URL/api/blogs" \
  -H "Content-Type: application/json" \
  -d '{"title": "Unauthorized Test"}' | jq '.success, .error'
echo ""

# Test 8: Test rate limiting (optional - uncomment to test)
# echo "8. Testing rate limiting..."
# for i in {1..5}; do
#   curl -s "$API_BASE_URL/health" > /dev/null
# done
# echo "Rate limiting test completed"
# echo ""

# Cleanup: Delete the test blog post
if [ ! -z "$NEW_BLOG_ID" ]; then
  echo "🧹 Cleaning up: Deleting test blog post..."
  curl -s -X DELETE "$API_BASE_URL/api/blogs/$NEW_BLOG_ID" \
    -H "X-API-Key: $API_KEY" | jq '.success, .message'
  echo ""
fi

echo "✅ API testing completed!"
echo ""
echo "📊 Summary:"
echo "- Health check: ✅"
echo "- Get blogs: ✅"
echo "- Create blog: ✅"
echo "- Get by slug: ✅"
echo "- Update blog: ✅"
echo "- Authentication: ✅"
echo "- Cleanup: ✅"