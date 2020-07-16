import React, { Component } from 'react';

class Post extends Component {
  render() {
    console.log(this.props.title)
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        {this.props.content.map((article, key) => <p key={key}>{article}</p>)}
        <h3>Comments:</h3>
        {this.props.comments.map((comment, key) => <p key={key}>{comment}</p>)}   
      </div>
    );
  }
}

export default Post;