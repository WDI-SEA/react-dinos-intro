import React, { Component } from 'react';

const blogs = {
  blog1: {
    postTitle: 'Dinosaurs are awesome'
    
  }
}

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Post Title</h1>
        <h5>Post Author</h5>
        <p>Post Content</p>
        <h3>Comments:</h3>
        <p>comment text</p>
      </div>
    );
  }
}

export default Post;
