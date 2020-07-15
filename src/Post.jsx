import React, {Component} from 'react';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = this.props.postInfo;
  }
  render() {
    return (
      <div className="post">
        <h1>{this.state.postTitle}</h1>
        <p>by {this.state.author}</p>
        <p>{this.state.content}</p>
        <h2>Comments:</h2>
        {this.state.comments.map((comment, key) =>
            <p>{comment}</p>
        )}
      </div>
    )
  }
}

export default Post;