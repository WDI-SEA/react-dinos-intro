import React, { Component } from 'react';

class Post extends Component {
  
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.content}</p>
        <h2>Comments:</h2>
        <p>{this.props.comments}</p>
        
      </div>
    );
  }
}

export default Post;