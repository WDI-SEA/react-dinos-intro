import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import { render } from '@testing-library/react';

let details = [
  {
  'postTitle': 'Dinosaurs are awesome',
  'author': 'Stealthy Stegosaurus',
  'content': 'Check out this body property',
  'comments': 'First'
  }
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Post title={details.postTitle} 
        author={details.author} 
        content={details.content}
        comments={details.comments} />
      </div>
    );
  }
}

export default App;
