import React, { useEffect, useState } from "react";
import Blog from "../../components/blogs/Blog";
import Button from "../../components/ui/Button";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/blogs?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [search]);

  return (
    <div className="py-8">
      <form className="pb-8 flex justify-center items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search by Blog title"
          className="w-xs border border-gray-300 rounded-md px-4 py-1.5 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-400 "
        />
        <Button className="py-2">Search</Button>
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
