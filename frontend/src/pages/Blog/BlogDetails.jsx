import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/blogs/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setPost(data.data);
        } else {
          throw new Error(data.error || "Failed to fetch blog post");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mt-6 py-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1 px-4 py-2 font-sans text-sm text-gray-900 shadow-2xl bg-gray-50 rounded-full"
          >
            <span className="text-2xl">
              <IoIosArrowRoundBack />
            </span>
            Back to all posts
          </Link>
        </div>
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="mt-6 py-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1 px-4 py-2 font-sans text-sm text-gray-900 shadow-2xl bg-gray-50 rounded-full"
          >
            <span className="text-2xl">
              <IoIosArrowRoundBack />
            </span>
            Back to all posts
          </Link>
        </div>
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-red-600">
            {error || "Post not found"}
          </h2>
          <p className="mt-4 text-gray-600">
            The blog post you're looking for doesn't exist or couldn't be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mt-6 py-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 px-4 py-2 font-sans text-sm text-gray-900 shadow-2xl bg-gray-50 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          <span className="text-2xl">
            <IoIosArrowRoundBack />
          </span>
          Back to all posts
        </Link>
      </div>
      
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      
      <h1 className="text-3xl font-bold mb-3 text-gray-900">{post.title}</h1>
      
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span className="font-sans">{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{post.excerpt}</p>

      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

     
    </div>
  );
}