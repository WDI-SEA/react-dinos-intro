import React, {Component} from "react";

let dinos = {
  postTitle: "Dinosaurs are awesome",
  author: "by Stealthy Stegosaurus",
  content: "Check out this body property!",
  comments: "Comments:"
}

class PostTitle extends Component {
  render() {
    return <h1>{this.props.postTitle}</h1>
  }
}

class Author extends Component {
  render() {
    return <p>{this.props.author}</p>
  }
}

class Content extends Component {
  render() {
    return <p>{this.props.content}</p>
  }
}


class Comments extends Component {
  render() {
    return <p>{this.props.comments}</p>
  }
}

class Post extends Component {
  render() {
    return(
      <div>
        <PostTitle postTitle={dinos.postTitle} />
        <Author author={dinos.author} />
        <Content content={dinos.content} />
        <Comments comments={dinos.comments} />
      </div>
    )
  }
}

export default function App() {
  return (
    <Post />
  );
}
