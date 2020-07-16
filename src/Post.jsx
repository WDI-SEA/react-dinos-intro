import React, { Component } from 'react';

let post = {
  header: "Dino Blog",
  author: "Josh",
  content: "Dinos are super cool according to Nick!",
  comment: "I also think dinos are super cool."
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div>
        <h1>by {this.props.author}</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <h1>Comments:</h1> 
          <p>{this.props.comment}</p>
      </div>
    );
  }
}


class Post extends Component {
  render() {
    return (
      <div>
        <Header header={post.header} />
        <Author author={post.author} />
        <Content content={post.content} />
        <Comment comment={post.comment} />
      </div>
    );
  }
}

export default Post;