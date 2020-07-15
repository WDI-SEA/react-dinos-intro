import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Post postTitle={"Dinosaurs are awesome"} author={"Stealthy Stegosaurus"} content={"Check out this body property!"} comments={"First!"}/>
    </div>
  );
}

export default App;
