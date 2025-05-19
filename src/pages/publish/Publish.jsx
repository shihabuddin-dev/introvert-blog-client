import React from "react";
import { FaPenNib } from "react-icons/fa";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router";

const Publish = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBlog = Object.fromEntries(formData.entries());
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after add", data);
        navigate("/blogs");
        form.reset();
      })
      .catch((error) => {
        console.error("Error publishing blog:", error);
      });
  };

  return (
    <>
      <div className="bg-slate-50 min-h-screen py-12 rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <FaPenNib className="text-teal-600 text-4xl mb-3" />
            <h2 className="text-3xl font-bold text-slate-800">
              Create a New Blog Post
            </h2>
            <p className="text-slate-500 mt-1">
              Share your thoughts and stories with the world.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
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
                required
                rows={10}
                placeholder="Blog Description"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <Button type="submit" variant="secondary">
              <FaPenNib className="mr-2 h-4 w-4" />
              Publish Post
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Publish;
