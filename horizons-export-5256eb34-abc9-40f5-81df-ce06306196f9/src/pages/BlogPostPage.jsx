import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { getBlogBySlug, blogs } from '@/data/blogs';

const BlogPostPage = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  // If blog not found, redirect to blog page
  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Get related blogs (same tags, excluding current blog)
  const relatedBlogs = blogs
    .filter(b => b.id !== blog.id && b.tags.some(tag => blog.tags.includes(tag)))
    .slice(0, 3);

  // Function to render markdown-like content
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentElement = '';
    let elementType = 'p';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        if (currentElement) {
          elements.push({ type: elementType, content: currentElement });
          currentElement = '';
        }
        elements.push({ type: 'h1', content: line.substring(2) });
      } else if (line.startsWith('## ')) {
        if (currentElement) {
          elements.push({ type: elementType, content: currentElement });
          currentElement = '';
        }
        elements.push({ type: 'h2', content: line.substring(3) });
      } else if (line.startsWith('### ')) {
        if (currentElement) {
          elements.push({ type: elementType, content: currentElement });
          currentElement = '';
        }
        elements.push({ type: 'h3', content: line.substring(4) });
      } else if (line.startsWith('- ')) {
        if (elementType !== 'ul') {
          if (currentElement) {
            elements.push({ type: elementType, content: currentElement });
          }
          currentElement = line.substring(2);
          elementType = 'ul';
        } else {
          currentElement += '\n' + line.substring(2);
        }
      } else if (line.trim() === '') {
        if (currentElement) {
          elements.push({ type: elementType, content: currentElement });
          currentElement = '';
          elementType = 'p';
        }
      } else {
        if (elementType === 'ul') {
          elements.push({ type: elementType, content: currentElement });
          currentElement = line;
          elementType = 'p';
        } else {
          currentElement += (currentElement ? '\n' : '') + line;
        }
      }
    }

    if (currentElement) {
      elements.push({ type: elementType, content: currentElement });
    }

    return elements.map((element, index) => {
      switch (element.type) {
        case 'h1':
          return (
            <h1 key={index} className="text-4xl font-bold text-white mb-6 mt-8">
              {element.content}
            </h1>
          );
        case 'h2':
          return (
            <h2 key={index} className="text-3xl font-bold text-white mb-4 mt-8">
              {element.content}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={index} className="text-2xl font-bold text-white mb-3 mt-6">
              {element.content}
            </h3>
          );
        case 'ul':
          const listItems = element.content.split('\n').map((item, i) => (
            <li key={i} className="mb-2">
              {item.includes('**') 
                ? item.split('**').map((part, j) => 
                    j % 2 === 1 ? <strong key={j} className="text-blue-300">{part}</strong> : part
                  )
                : item
              }
            </li>
          ));
          return (
            <ul key={index} className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
              {listItems}
            </ul>
          );
        default:
          return (
            <p key={index} className="text-gray-300 mb-4 leading-relaxed">
              {element.content.includes('**') 
                ? element.content.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-blue-300">{part}</strong> : part
                  )
                : element.content.includes('[') && element.content.includes('](/') 
                ? element.content.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                    if (linkMatch) {
                      return (
                        <Link 
                          key={i} 
                          to={linkMatch[2]} 
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          {linkMatch[1]}
                        </Link>
                      );
                    }
                    return part;
                  })
                : element.content
              }
            </p>
          );
      }
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {blog.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl overflow-hidden mb-8">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300">
            {renderContent(blog.content)}
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="mt-16 pt-16 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Learn how Setidure Technologies can help you implement intelligent automation 
            and AI infrastructure solutions tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BlogPostPage;