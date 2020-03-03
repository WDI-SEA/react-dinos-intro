
import React, {Component} from 'react';




let elems = {
  post: "Dinosaurs are awesome",
  author: "by Stealthy Stegosaurus",
  content: "Check out this body property!",
  comments: "Comments: first!"
}

class Title extends Component {
  render() {
    return (
      <h1>{this.prop.post}</h1>
    )
  }
}

class Author extends Component {
  render() {
    return (
      <h1>{this.prop.author}</h1>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <h4>{this.prop.content}</h4>
    )
  }
}

class Comments extends Component {
  render() {
    return (
      <h4>{this.prop.comments}</h4>
    )
  }
}

class FullPost extends Component {
  render() {
    return (
      <div>
        <Title title={elems.title} />
        <Author author={elems.author} />
        <Content content={elems.content} />
        <Comments comments={elems.comments} />
      </div>
    )
  }
}


export default FullPost;
