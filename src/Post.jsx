import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>By: {this.props.author}</p>
                <p>{this.props.content}</p>
                <h4>Comments:</h4>
                <p>{this.props.comment}</p>
            </div>
        );
    }
}

export default Post;