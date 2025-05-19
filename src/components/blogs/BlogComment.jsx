import React, { useState } from "react";
import { FaCommentAlt, FaPaperPlane } from "react-icons/fa";
import Button from "../ui/Button";

const BlogComment = () => {
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Shihab Uddin",
      text: "Great article, very insightful!",
      date: "2024-07-25",
    },
    {
      id: 2,
      author: "Omar",
      text: "I learned a lot. Thanks for sharing.",
      date: "2024-07-26",
    },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newCommentText.trim() || !newCommentAuthor.trim()) {
      alert("Please enter your name and comment.");
      return;
    }
    const newComment = {
      id: Date.now(),
      author: newCommentAuthor,
      text: newCommentText,
      date: new Date().toISOString().split("T")[0],
    };
    setComments([newComment, ...comments]);
    setNewCommentText("");
    setNewCommentAuthor("");
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 border-t border-slate-200">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
        <FaCommentAlt className="mr-3 text-teal-600" />
        Comments ({comments.length})
      </h2>

      {/* Add Comment Form */}
      <form
        onSubmit={handleCommentSubmit}
        className="mb-8 p-4 bg-slate-50 rounded-lg shadow"
      >
        <h3 className="text-lg font-medium text-slate-700 mb-3">
          Leave a Comment
        </h3>
        <div className="mb-4">
          <label
            htmlFor="commentAuthor"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="commentAuthor"
            value={newCommentAuthor}
            onChange={(e) => setNewCommentAuthor(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="commentText"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Your Comment
          </label>
          <textarea
            id="commentText"
            rows="4"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Write your thoughts here..."
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <Button type="submit" className="">
          <FaPaperPlane className="mr-2" />
          Post Comment
        </Button>
      </form>

      {/* Display Comments */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start mb-1">
                <p className="font-semibold text-slate-700">{comment.author}</p>
                <p className="text-xs text-slate-400">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
              <p className="text-slate-600 text-sm">{comment.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-center py-4">
          No comments yet. Be the first to share your thoughts!
        </p>
      )}
    </div>
  );
};

export default BlogComment;
