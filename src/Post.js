import React, {Component} from "react";
import Comment from "./Comment.js";

class Post extends Component {

    constructor(props) {
        super();
        this.state = {
            body: props.body
        }
    }

    changeBody(e) {
        let userInput = prompt("What body do you want?");
        this.setState({
            body: userInput
        });
    }
    
    render() {
        const comments = [];
        this.props.comments.forEach((comment, index) => {
            comments.push(<Comment key={index} body={comment} />);
        });

        return (
            <div>
                <h1 className="post-title">{this.props.title}</h1>
                <h3 className="post-author">by {this.props.author}</h3>
                <h3 className="post-content">{this.state.body}</h3>
                <button onClick={e => this.changeBody(e)}>Surprise!</button>
                <h2 className="post-comment-title">Comments:</h2>
                <div className="post-comment">{comments}</div>
            </div>
        );
    }
}

export default Post;