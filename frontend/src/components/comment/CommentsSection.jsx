import React, { useState } from "react";
import { IoIosChatbubbles, IoIosClose } from "react-icons/io";
import Comment from "./Comment";

const CommentsSection = ({ comments, onAddComment, onReply }) => {
  const [userName, setUserName] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleAddComment = () => {
    if (commentInput.trim() !== "" && userName.trim() !== "") {
      onAddComment(userName, commentInput);
      setUserName("");
      setCommentInput("");
      setShowCommentBox(false);
    }
  };

  // Ensure comments is always an array
  const safeComments = Array.isArray(comments) ? comments : [];

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Comments ({safeComments.length})
        </h2>
        <button
          onClick={() => setShowCommentBox(true)}
          className="px-4 py-2  text-white rounded-xl bg-black transition-colors"
        >
          Add Comment
        </button>
      </div>

      {safeComments.length > 0 ? (
        <div className="space-y-4">
          {safeComments.map((comment) => (
            <Comment key={comment.id} comment={comment} onReply={onReply} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-xl">
          <IoIosChatbubbles className="text-4xl text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      )}

      {/* Comment Modal */}
      {showCommentBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Add a comment
              </h3>
              <button
                onClick={() => setShowCommentBox(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoIosClose className="text-2xl" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Comment
                </label>
                <textarea
                  id="comment"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowCommentBox(false)}
                className="px-5 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddComment}
                disabled={!userName.trim() || !commentInput.trim()}
                className="px-5 py-2 bg-black text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
