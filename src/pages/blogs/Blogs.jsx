import React, { useEffect, useState } from "react";
import Blog from "../../components/blogs/Blog";
import Button from "../../components/ui/Button";
import Swal from "sweetalert2";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://introvert-blog-server.vercel.app/blogs?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [search]);

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://introvert-blog-server.vercel.app/blog/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingBlogs = blogs.filter((blog) => blog._id !== id);
              setBlogs(remainingBlogs);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="py-8">
      <form className="pb-8 flex flex-col md:flex-row justify-center items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search by Blog title"
          className="w-xs border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-400 "
        />
        <Button>Search</Button>
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
