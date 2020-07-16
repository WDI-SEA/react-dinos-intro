import React, { Component } from 'react';
import './App.css';
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post
          postTitle={'Dinosaurs are awesome'}
          author={'Stealthy Stegosaurus'}
          content={this.props.content}
          comments={this.props.comments} 
        />
      </div>
    )
  }
}

export default App;
