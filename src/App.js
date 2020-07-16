import React from 'react';
import './App.css';
import Post from './Post'

const blogContent = {
  title: [
    "Dinosaurs are awesome",
  ],
  author: [
    "Stealthy Stegosaurus",
  ],
  content: [
    "Check out this body property!",
    "I can even add more paragraphs and they show up.",
    "Look at me go.... I am as cool as a dinosaur."
  ],
  comments: [
    "First!",
    "T-Rex is the BEST dinosaur!"
  ]
}


function App() {

  return(
    <div className="App">
      <Post title={blogContent.title} author={blogContent.author} content={blogContent.content} comments={blogContent.comments} />
    </div>
  )
  
}

export default App;
