import React from 'react';
import './App.css';
import Post from './Post';

function App() {

  let content = [
    "Dinosaurs are super cool",
    "Dinosaur fossils have been found on all seven continents.",
    "The name \"Velociraptor\" means speedy thief",
    "Dinosaurs dominated Earth for over 165 million years. Humans have been around for only 2 million years."
  ]

  let comments = [
    "First!",
    "Wowww Dinosaurs are cool af",
    "Jeff Goldblum is bae",
    " ^ Okay, let's keep it PG"
  ]

  return (
    <div className="App">
      <Post 
        postTitle={'Dinosaurs are awesome'}
        author={'Stealthy Stegosaurus'}
        content={content}
        comments={comments}
      />
    </div>
  );
}

export default App;
