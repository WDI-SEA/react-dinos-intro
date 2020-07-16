import React from 'react';
import './App.css';
import Post from './Post';

let contents = [
  "Check out this body property!"
]

let comments = [
  "First!"
]


function App() {
  return (
    <div className="App">
      <Post 
        postTitle={'Dinosaurs are Awesome'}
        author={'Stealthy Stegosaurus'}
        contents={contents}
        comments={comments}
      />
    </div>
  );
}

export default App;
