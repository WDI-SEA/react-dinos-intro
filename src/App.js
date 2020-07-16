import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'

const postItems = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  content: 'Check out this body property!',
  comments: 'First!'
}

function App() {
  return (
    <div className="App">
     <Post title={postItems.title} author={postItems.author} content={postItems.content} comments={postItems.comments}/>
    </div>
  );
}

export default App;
