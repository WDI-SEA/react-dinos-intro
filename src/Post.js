import React, { Component } from 'react';

class Post extends Component {
    render() {

        const comments = this.props.comments.map( (comment, i) => {
            return (
                <p>{comment}</p>
            )
        })
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <h2>By: {this.props.author}</h2>
                <p>{this.props.content}</p>
                <h3>Comments:</h3>
                <p>{comments}</p>
            </div>
        );
    }
}

export default Post;