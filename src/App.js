import React from 'react';
import './App.css';
import Comments from './Comments'
import Posts from './Posts'

function App() {

    let post = {
            author:"Bossy Brontasaurus",
            content:"Dinosaurs are heckin' rad."
    }

    let comments = [
        "Heck yeah!",
        "You know it!"
    ]

  return (
    <div className="App">
        <div className="titleText">
                <h1>Dinosaurs are RAD!</h1>
        </div>
        <div className="postsContainer">
                <Posts post={post} />
        </div>
        <div className="commentsContainer">
            <Comments comments={comments} />
        </div>
    </div>
  );
}

export default App;
