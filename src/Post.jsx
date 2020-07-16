import React, { Component } from 'react';

let dino = {
    postTitle: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    content: "Check out this body property!",
    comment: "First!"
}

class PostTitle extends Component {
    render() {
        return (
            <div>
                <p>{this.props.postTitle}</p>
            </div>
        );
    }
}

class Author extends Component {
    render() {
        return (
            <div>
                <p>{this.props.author}</p>
            </div>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.comment}</p>
            </div>
        );
    }
}

export default class Post extends Component {
    render() {
        return (
            <div>
                <PostTitle postTitle={dino.postTitle} />
                <Author author={dino.author} />
                <Content content={dino.content} />
                <Comment comment={dino.comment} />
            </div>
        )
    }
}