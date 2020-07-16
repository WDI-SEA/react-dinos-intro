import React, { Component } from 'react';

class Post extends Component {
    render() {
        console.log(this.props.post[0])
        console.log(this.props.post[0].title)
        return (
            <div>
                <h1>{this.props.post[0].title}</h1>
                <h2>By {this.props.post[0].author}</h2>
                <p>{this.props.post[0].content}</p>
                <h1>Comments:</h1>
                <h5>{this.props.post[0].comment}</h5>
            </div>
        );
    }
}

export default Post;