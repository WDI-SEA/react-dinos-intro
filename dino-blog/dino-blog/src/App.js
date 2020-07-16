import React from 'react';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="App">
      <Post postTitle="Dino's are awesome" author="Stealthy Stegosaurus" content="Check out this body content!" comments="First!" />
    </div>
  );
}

export default App;
