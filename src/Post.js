import React, { Component } from 'react';

class Post extends Component {
    render() {

        const comments = this.props.comments.map( (comment, i) => {
            return (
                <p>{comment}</p>
            )
        })

        const contents = this.props.content.map( (content, i) => {
            return (
                <p>{content}</p>
            )         
        })
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <p>By: {this.props.author}</p>
                <p>{contents}</p>
                <h2>Comments:</h2>
                <p>{comments}</p>
            </div>
        );
    }
}

export default Post;