import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty, IoIosChatbubbles, IoIosArrowDown, IoIosArrowUp, IoIosSend } from "react-icons/io";

const Comment = ({ comment, onReply, depth = 0 }) => {
  // Add a safe default for comment
  const safeComment = comment || {
    id: 0,
    user: "Unknown User",
    text: "",
    date: new Date().toLocaleDateString(),
    likes: 0,
    replies: []
  };

  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(true);
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleReply = () => {
    if (replyText.trim() !== "") {
      onReply(safeComment.id, replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleReply();
    }
  };

  // If comment is null/undefined, don't render anything
  if (!comment) {
    return null;
  }

  return (
    <div className={`${depth > 0 ? 'ml-8' : ''}`}>
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
            {safeComment.user?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-gray-900">{safeComment.user || 'Unknown User'}</h4>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{safeComment.date}</span>
            </div>
            <p className="text-gray-700 mb-3">{safeComment.text}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <button 
                onClick={handleLike}
                className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
              >
                {isLiked ? (
                  <IoIosHeart className="text-red-500 text-lg" />
                ) : (
                  <IoIosHeartEmpty className="text-lg" />
                )}
                <span>{safeComment.likes + (isLiked ? 1 : 0)}</span>
              </button>
              
              <button 
                onClick={() => setShowReplyBox(!showReplyBox)}
                className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <IoIosChatbubbles className="text-lg" />
                <span>Reply</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reply Input */}
        {showReplyBox && (
          <div className="mt-4 pl-12">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Write a reply... (Press Enter to post)"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                onClick={handleReply}
                className="p-2 text-black rounded-lg transition hover:bg-gray-100"
                title="Send reply"
              >
                <IoIosSend className="text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Nested Replies */}
      {safeComment.replies && safeComment.replies.length > 0 && (
        <div>
          <button 
            onClick={() => setShowReplies(!showReplies)}
            className="flex items-center gap-1 text-sm text-blue-600 mb-2 ml-8"
          >
            {showReplies ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {showReplies ? 'Hide replies' : `Show ${safeComment.replies.length} replies`}
          </button>
          
          {showReplies && (
            <div>
              {safeComment.replies.map((reply) => (
                <Comment 
                  key={reply.id} 
                  comment={reply} 
                  onReply={onReply}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;