import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <p>by {this.props.author}</p>
                {this.props.contents.map( (content, i) =>
                    <p key={`content-${i}`}>{content}</p>
                )}
                <h2>Comments:</h2>
                {this.props.comments.map( (comment, i) => 
                    <p key={`comment-${i}`}>{comment}</p>
                )}
            </div>
        );
    }
}

export default Post;