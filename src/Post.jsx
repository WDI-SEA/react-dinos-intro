import React, { Component } from 'react';

class Post extends Component {
  render() {
    const comments = this.props.post.comments.map((comment, key) => {
      return <p key={ key }>{ comment  }</p>
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
