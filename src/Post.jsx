import React, {} from 'react';

const Post = (props) => {
    return (

        props.post.map((blog) => 
        <div>
            <h1>{blog.title}</h1>
            <h2>by {blog.author}</h2>
            <p>{blog.content}</p>
            <h1>Comments:</h1>
            <h5>{blog.comment}</h5>
        </div>)
      
    );
}

export default Post;