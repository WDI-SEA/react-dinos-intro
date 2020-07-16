import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: props.post,
      filterValue: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Post post={this.state.post}/>
      </div>
    );

  }
  
}

export default App;
