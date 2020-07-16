import React, { Component } from 'react';

class Post extends Component {
    render() {

        let allContent = this.props.content.map((entry) => {
            return (
                <div>
                    {entry}
                </div>
            )
        } )
        
        let allComments = this.props.comments.map((comment) => {
            return (
                <div>
                    {comment}
                </div>
            )
        })

        return (
            <div className="react-dinos">
                <h1>{this.props.postTitle}</h1>
                <p>by {this.props.author}</p>
                <p> {allContent} </p>

                <div className="comments">
                    <h3>Comments:</h3>
                    <p> {allComments} </p>
                </div>
            </div>
        );
    }
}

export default Post;