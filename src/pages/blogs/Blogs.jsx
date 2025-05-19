import React, { useEffect, useState } from "react";
import Blog from "../../components/blogs/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="py-8">
        <input type="text" />

        <div>
            {
                blogs.map(blog=><Blog key={blog._id} blog={blog}/>)
            }
        </div>
      
    </div>
  );
};

export default Blogs;
