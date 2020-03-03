import React, {Component} from "react";
import Comment from "./Comment.js";

class Post extends Component {

    
    render() {
        const comments = [];
        this.props.comments.forEach((comment, index) => {
            comments.push(<Comment key={index} body={comment} />);
        });

        return (
            <div>
                <h1 className="post-title">{this.props.title}</h1>
                <h3 className="post-author">by {this.props.author}</h3>
                <h3 className="post-content">{this.props.body}</h3>
                <h2 className="post-comment-title">Comments:</h2>
                <div className="post-comment">{comments}</div>
            </div>
        );
    }
}

export default Post;