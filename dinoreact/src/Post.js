import React, { Component } from 'react';


// class Post extends Component {
//     constructor(props){
//       super(props)
//     this.state = {
//       author:props.author,
//       author: 'By: Luke A. Myers'
//     }
//   }

class Post extends Component {
    render() {
        return (
            <div>
                <h1>Dinosaurs are awesome</h1>
                <p>By: Luke A. Myers</p>
                <p>Dinosaurs have been my favorite animal for my whole childhood. I knew at least 15 types by name when I was only 6 or 7 years old. In the 20 + years that have passed science has learned much more about them. We know how they died off. We know that some if not many might have had fury feathers. We also know that birds come dirrectly from Dinosaurs.</p>
                <h4>Comments:</h4>
                <p>First Comment. This blog is so cool!</p>
                
            </div>
        );
    }
}

export default Post;