import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaTags,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import BlogComment from "../../components/blogs/BlogComment";

const BlogDetails = () => {
  const initialBlog = useLoaderData();

  if (!initialBlog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-600">
          Loading blog post or post not found...
        </div>
      </div>
    );
  }

  const {
    image,
    title,
    description,
    author = "Anonymous Author",
    publishDate,
    category = "Uncategorized",
  } = initialBlog;

  const formattedPublishDate = publishDate
    ? new Date(publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div className="bg-slate-50 min-h-screen rounded-2xl px-4 sm:px-6 lg:px-8">
      <Link
        to="/blogs"
        className="text-lg font-semibold flex justify-center items-center gap-2 py-6"
      >
        <FaRegArrowAltCircleLeft />
        Back
      </Link>
      <article className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mb-8">
        {image && (
          <img
            src={image}
            alt={title || "Blog post image"}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        )}

        <div className="p-6 sm:p-8 md:p-10">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight">
            {title || "Blog Post Title"}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center w-full sm:w-auto">
              <FaUserCircle className="mr-2 text-slate-400" />
              <span>
                By: <span className="font-medium text-slate-600">{author}</span>
              </span>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <FaCalendarAlt className="mr-2 text-slate-400" />
              <span>
                Published:{" "}
                <span className="font-medium text-slate-600">
                  {formattedPublishDate}
                </span>
              </span>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <FaTags className="mr-2 text-slate-400" />
              <span>
                Category:{" "}
                <span className="font-medium text-slate-600">{category}</span>
              </span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            {description ? (
              description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>No content available for this post.</p>
            )}
          </div>
        </div>
        <BlogComment />
      </article>
    </div>
  );
};

export default BlogDetails;
