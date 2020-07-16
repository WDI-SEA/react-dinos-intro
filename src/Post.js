import React, {Component} from 'react';
import Comment from './Comment';
import Content from './Content'
import PostTitle from './PostTitle'
import Author from './Author'


let post = {
    postTitle: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    content: "Need to find some content to put here!",
    comment: "That Stego is super sneaky!!"
}

class Post extends Component {
    render () {
        return (
            <div>
                <PostTitle postTitle={post.postTitle} />
                <Author author={post.author} />
                <Content content={post.content} />
                <Comment comment={post.comment} />
            </div>
        )
    }
}


export default Post;