import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosHeart, IoIosHeartEmpty, IoIosShare } from "react-icons/io";
import CommentsSection from "../../components/comment/CommentsSection";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.success) {
          setPost(data.data);
          setLikes(data.data.likes || 0);
          setComments(data.data.comments || []);
        } else throw new Error(data.error || "Failed to fetch blog post");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPost();
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleAddComment = (userName, commentText) => {
    const newComment = {
      id: Date.now(),
      user: userName,
      text: commentText,
      date: new Date().toLocaleDateString(),
      likes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const handleReply = (parentId, replyText) => {
    const newReply = {
      id: Date.now(),
      user: "Current User",
      text: replyText,
      date: new Date().toLocaleDateString(),
      likes: 0,
      replies: [],
    };

    const addReplyToComment = (commentsArray, parentId) => {
      return commentsArray.map((comment) => {
        if (comment.id === parentId) {
          return { ...comment, replies: [...(comment.replies || []), newReply] };
        } else if (comment.replies && comment.replies.length > 0) {
          return { ...comment, replies: addReplyToComment(comment.replies, parentId) };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments, parentId));
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 flex justify-center items-center h-64">
        <p className="text-gray-600">Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-full shadow-2xl mt-6"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          Back to all posts
        </Link>
        <h2 className="text-xl font-semibold text-red-600 mt-10">{error || "Post not found"}</h2>
        <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 relative">
      <div className="mt-6 py-4">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1 px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-full shadow-2xl hover:bg-gray-100 transition"
        >
          <IoIosArrowRoundBack className="text-2xl" />
          Back to all posts
        </Link>
      </div>

      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-3 text-gray-900">{post.title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{post.excerpt}</p>
      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>

      <CommentsSection comments={comments} onAddComment={handleAddComment} onReply={handleReply} />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
        >
          {isLiked ? <IoIosHeart className="text-xl text-red-500" /> : <IoIosHeartEmpty className="text-xl" />}
          <span>{likes}</span>
        </button>
        <button
          onClick={() =>
            navigator.share ? navigator.share({ title: post.title, url: window.location.href }) : alert("Share not supported")
          }
          className="flex items-center justify-center w-12 h-12 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
        >
          <IoIosShare className="text-xl" />
        </button>
      </div>
    </div>
  );
}
