import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../blogData";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id.toString() === id);

  if (!post) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Post not found</h2>
        <Link to="/blogs" className="text-blue-900 underline">
          Go back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mt-6 py-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1  px-4 py-2 font-sans text-sm text-gray-900 shadow-2xl bg-gray-50 rounded-full"
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
      <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.date} • {post.readTime}
      </p>
      <p className="text-sm font-sans text-gray-900 mb-6">{post.excerpt}</p>

      <p className="text-gray-700 leading-relaxed">{post.content}</p>

      {/* <div className="mt-6">
        <Link
          to="/blogs"
          className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Back to Blogs
        </Link>
      </div> */}
    </div>
  );
}
