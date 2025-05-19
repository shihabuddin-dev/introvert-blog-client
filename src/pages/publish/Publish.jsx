import React from "react";
import { FaPenNib } from "react-icons/fa";
import Button from "../../components/ui/Button";

const Publish = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    const formData= new FormData(form)
    const newBlog= Object.fromEntries(formData.entries())
    

  }

  return (
    <>
      <div className="py-10 px-4 max-w-3xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-6">
          <FaPenNib className="text-indigo-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">
            Publish a New Blog Post
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-6 rounded-xl space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter your blog title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
                Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              name="textArea"
              required
              rows={8}
              placeholder="Write your story..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <Button type="submit" className="w-full">
            Publish Post
          </Button>
        </form>
      </div>
    </>
  );
};

export default Publish;
