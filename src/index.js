import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const post = {
  postTitle: "Dinos are awesome 🔥",
  author: "by Feathered Raptor 🌊",
  content: ["Check out this body property bud🌊"],
  comments: ["First comment 🌊"]
}

ReactDOM.render(
  <React.StrictMode>
    <App post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
