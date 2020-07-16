import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <h4>by{this.props.author}</h4>
                <h2>{this.props.content}</h2>
                <h3>Comments:</h3>
                <h3>{this.props.comments}</h3>
            </div>
        );
    }
}

export default Post;