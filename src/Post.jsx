// importing {  Component } is only needed for the class component
import React, { Component } from 'react';

// using a functional component to render posts
// removed this. and passed an argument of props
const Post = (props) => {
  const comments = props.post.comments.map((comment, key) => {
    return <p key={ key }>{ comment }</p>
  })
  return (
    <div>
      <hr />
      <h1>{ props.post.title }</h1>
      <h5>{ props.post.author }</h5>
      <p>{ props.post.content }</p>
      <h3>Comments:</h3>
      { comments }
      <hr />
    </div>
  )
}

// old post is written as a class component
class PostOld extends Component {
  render() {
    const comments = this.props.post.comments.map((comment, key) => {
      return <p key={ key }>{ comment }</p>
    })
    return (
      <div>
        <hr />
        <h1>{ this.props.post.title }</h1>
        <h5>{ this.props.post.author }</h5>
        <p>{ this.props.post.content }</p>
        <h3>Comments:</h3>
        { comments }
        <hr />
      </div>
    );
  }
}

export default Post;
