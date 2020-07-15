import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Post postInfo={this.props.postInfo}/>
      </div>
    );
  }
}

export default App;
