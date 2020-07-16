import React, { Component } from 'react';

const authors = [
    'Trirarchuncus prairiensis'
  ]

  const titles = [
    'Bizarre Captain Hook dinosaur with long claws discovered in Montana Badlands',
  ]
  
  const content = [
    'It\'s Steven Spielberg\'s filmography combined — a dinosaur named after Captain Hook.',
  ]
  
  const comments = [
    'Hook is a good movie. It would be a great movie if there were dinosaurs in it.'
  ]

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{titles}</h1>
                <p>By: {authors}</p>
                <p>{content}</p>
                <h1>Comments:</h1>
                <p>{comments}</p>
            </div>
        );
    }
}

export default Post;