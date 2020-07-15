import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <h3>by {this.props.author}</h3>
                <h3>{this.props.content}</h3>
                <h4>Comments:</h4>
                <h4>{this.props.comments}</h4>
            </div>
        );
    }
}

export default Post;