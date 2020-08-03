import React, { } from 'react';

let post = {
    PostTitle: "Dino's are AWESOME",
    author: "Stealthy Stego",
    content: "Check out this body property",
    comment: "First"
}

const Comment = (props) => {
    return (
        <div>
            <p>{props.comment}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <p>{props.content}</p>
    )
}

const PostTitle = (props) => {
    return (
        <h1>{props.PostTitle}</h1>
    )
}

const Author = (props) => {
    return (
        <h3>{props.author}</h3>
    )
}

const Post = (props) => {
    return (
        <div className="App">
            <PostTitle PostTitle={post.PostTitle} />
            <Author author={post.author} />
            <Content content={post.content} />
            <Comment comment={post.comment} />
        </div>
    )
}



function App() {
    return (
        <Post />
    )
}
export default App;