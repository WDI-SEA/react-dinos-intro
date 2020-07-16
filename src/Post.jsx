import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.postTitle}</h1>
                <p>by {this.props.author}</p>

                {this.props.content.map(content => 
                    <p>{content}</p>
                )}

                <h3>Comments:</h3>
                {this.props.comments.map(comment =>
                    <p>{comment}</p>
                )}
            </div>
        );
    }
}

export default Post; 