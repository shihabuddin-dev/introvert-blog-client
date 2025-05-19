import React from "react";
import { Link } from "react-router";
import { FiArrowRight, FiEdit, FiTrash2 } from "react-icons/fi";
const Blog = ({ blog,handleDelete }) => {
  const { _id, title, description, image } = blog || {};

  const truncatedDescription = description
    ? description.length > 100
      ? description.slice(0, 100) + "..."
      : description
    : "No description available.";

  if (!blog || !_id) {
    return null;
  }

  return (
    <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full">
      {image && (
        <Link to={`/blog/${_id}`} className="block">
          <img
            src={image}
            alt={title || "Blog post image"}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-102"
          />
        </Link>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
          {title || "Untitled Post"}
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">
          {truncatedDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
          <Link
            to={`/blog/${_id}`}
            className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center group"
          >
            Read More
            <FiArrowRight className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <div className="flex gap-2 cursor-pointer">
            <FiEdit className="w-5 h-5 text-teal-600" />
            <FiTrash2 onClick={()=>handleDelete(_id)} className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
