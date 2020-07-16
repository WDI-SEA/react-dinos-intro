import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>by {this.props.author}</p>
                <p>{this.props.content}</p>
                <h3>Comments:</h3>
                <p>{this.props.comments}</p>
            </div>
        );
    }
}

export default Post;