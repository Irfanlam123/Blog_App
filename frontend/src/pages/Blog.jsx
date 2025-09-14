import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { authorInfo } from "./blogData"; // Your author info

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data) setBlogPosts(data.data);
        else throw new Error("Unexpected API response format");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-center items-center h-64">
        <p className="text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-center items-center h-64">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8">
      {/* Main Blog List */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post._id || post.id} className="group">
              <div className="bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col overflow-hidden h-full">
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 tracking-wide">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto">
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center bg-[#0a1128] hover:bg-[#050a1a] px-5 py-2 rounded-full text-white text-sm font-medium transition-colors duration-300"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-8">
          {/* Author Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <img
              src={authorInfo.avatar}
              alt={authorInfo.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h4 className="text-lg font-semibold">{authorInfo.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{authorInfo.title}</p>
            <p className="text-gray-600 text-[15px] leading-relaxed">{authorInfo.bio}</p>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-normal mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
              Get the latest articles on design and technology delivered to your inbox.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 transition-all duration-300"
              />
              <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
