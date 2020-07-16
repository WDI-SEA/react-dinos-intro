import React, {} from 'react';
let post = {
    header: "Some Dino based Blog Post",
    author: "SEI 29 Class",
    content: "Some freaking brontosaurus",
    comment: "This is how I really feel about dinos 🦖"
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
const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    )
}
const Author = (props) => {
    return (
        <h3>{props.author}</h3>
    )
}
const Post = () => {
    return (
        <div>
            <Header header={post.header} />
            <Author author={post.author} />
            <Content content={post.content} />
            <Comment comment={post.comment} />
        </div>
    )
}
const App = () => {
  return (
    <Post />
  )
}
export default App;





