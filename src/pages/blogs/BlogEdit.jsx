import React from "react";
import { useLoaderData } from "react-router";
import Button from "../../components/ui/Button";
import { FaEdit, FaPenNib } from "react-icons/fa";
import Swal from "sweetalert2";

const BlogEdit = () => {
  const blog = useLoaderData();
  const { _id, title, image, description } = blog || {};

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedBlog = Object.fromEntries(formData.entries());
    fetch(`https://introvert-blog-server.vercel.app/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Blog Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-slate-50 min-h-screen py-12 rounded-2xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <FaEdit className="text-teal-600 text-4xl mb-3" />
          <h2 className="text-3xl font-bold text-slate-800">Edit Blog Post</h2>
        </div>

        <form
          onSubmit={handleEdit}
          className="bg-white shadow-xl p-6 sm:p-8 rounded-xl space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              id="title"
              required
              placeholder="Blog Title"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-slate-700 mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              name="image"
              defaultValue={image}
              id="image"
              required
              placeholder="https://example.com/your-image.jpg"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-700 mb-1"
            >
              Content
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={description}
              required
              rows={10}
              placeholder="Blog Description"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
            ></textarea>
          </div>
          <Button type="submit" variant="secondary">
            <FaPenNib className="mr-2 h-4 w-4" />
            Save Edit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;
