import React from 'react';

const Post = () => {
  let postData = {
    postTitle: "Dinos are awesome!",
    author: "Jamo",
    content: "I love Dinosaurs, always have since I was kid. My favorite is the Velociraptor!",
    comments: "Velociraptors are dope!"
  }


  return (
    <div>
      <h5>by {postData.author}</h5>
      <p>{postData.content}</p>
      <h5><strong>Comments:</strong></h5>
      <p>{postData.comments}</p>
    </div>
  )
}

export default Post