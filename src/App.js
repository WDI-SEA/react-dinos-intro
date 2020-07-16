import React from 'react';
import './App.css';
import Post from './Post';
import posts from './posts';


function App() {
  const renderedPosts = posts.map((post) => {
    return <Post post={ post }/>
  })
  return (
    <div className="App">
      { renderedPosts }
    </div>
  );
}

export default App;
