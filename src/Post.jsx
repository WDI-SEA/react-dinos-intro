import React,  {} from 'react';

let post = {
    header: "I am scared of how large Dinos are",
    author: "Not Laura Dern 👩🏼",
    content: "What would the world look like if Dinos were around?",
    comments:   "Laura Dern is really good with unruly Dinos 🦖"
  }
  
  
  const Header = (props) => {
    return (
      <h1>{props.header}</h1>
    )
  }
  
  const Author = (props) => {
    return (
      <div>
        <h2>By {props.author}</h2>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <p>{props.content}</p>
      </div>
    )
  }
  
  const Comments = (props) => {
    return (
      <div>
        <p>{props.comments}</p>
      </div>
    ) 
  }
  
  const Post = () => {
    return (
      <div>
        <Header header={post.header}/>
        <Author author={post.author}/>
        <Content content={post.content} />
        <Comments comments={post.comments} />
      </div>
    )
  }

export default Post;