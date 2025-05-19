import React from 'react';

const Blog = ({blog}) => {
 const {image, title, description}= blog || {}
    return (
        <div>
               <img src={image} alt="" />
               <p>{title}</p>
               <p>{description}</p>
        </div>
    );
};

export default Blog;