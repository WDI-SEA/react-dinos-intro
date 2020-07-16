import React, { Component } from 'react';
import './App.css';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post postTitle={this.props.post.postTitle}
        author={this.props.post.author}
        content={this.props.post.content}
        comments={this.props.post.comments} />
      </div>
    )
  }
}

export default App;
