import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'




const blogContent = [{
  title: 
    "Dinosaurs are awesome",
  author: 
    "Stealthy Stegosaurus",
  content: [
    "Check out this body property!"
  ],
  comments: [
    "first!",
    "second"
  ]
}]

//  {
//   title: 
//     "Dinosaurs are awesome",
//   author: 
//     "Stealthy Stegosaurus",
//   content: [
//     "Check out this body property!"
//   ],
//   comments: [
//     "first!"
//   ]
// }]

class App extends Component {

  render() {
    const posts = blogContent.map((post, i) => {
      return (
        <Post 
        postTitle={blogContent[i].title}
        author={blogContent[i].author}
        content={blogContent[i].content}
        comments={blogContent[i].comments}
      />
      )
    })
  return (
    <div className="App">
      {posts}
    </div>
  );
  }
}

export default App;
