import React, {Component} from "react";
import './App.css';




let elems = {
  header: 'Dinos be dinoin',
  author: 'Richard Scary',
  content: 'This is a post about dinos listen up people!'
}

let commentStuff = [
  {
    commentHeader: 'Rawr',
    commentBody: 'Dinobama says hi'
  },
  {
    commentHeader: 'Radasaurus',
    commentBody: 'Rawrxd'
  }
];

class Header extends Component {
  render() {
    return(
      <div>
      <h1>{this.props.header}</h1>
      <h3>{this.props.author}</h3>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <p>{this.props.content}</p>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
      <h3>{this.props.commentHeader}</h3>
      <p>{this.props.commentBody}</p>
    </div>
    )
  }
}

class Commentpost extends Component {
  render() {
    let comments = [];
    commentStuff.forEach(function(comment, index) {
     comments.push( 
     <Comment 
     commentHeader={comment.commentHeader} 
     commentBody={comment.commentBody}/>);
    })
    return (
      <div>
        {comments}
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Header header={elems.header} author={elems.author}/>
      <Content content={elems.content}/>
      <Commentpost />

    </div>
  )
}

export default App;

// ---------------------------------

// let dinos = {
//   postTitle: "Dinosaurs are awesome",
//   author: "by Stealthy Stegosaurus",
//   content: "Check out this body property!",
//   comments: "Comments:"
// }

// class PostTitle extends Component {
//   render() {
//     return <h1>{this.props.postTitle}</h1>
//   }
// }

// class Author extends Component {
//   render() {
//     return <p>{this.props.author}</p>
//   }
// }

// class Content extends Component {
//   render() {
//     return <p>{this.props.content}</p>
//   }
// }


// class Comments extends Component {
//   render() {
//     return <p>{this.props.comments}</p>
//   }
// }

// class Post extends Component {
//   render() {
//     return(
//       <div>
//         <PostTitle postTitle={dinos.postTitle} />
//         <Author author={dinos.author} />
//         <Content content={dinos.content} />
//         <Comments comments={dinos.comments} />
//       </div>
//     )
//   }
// }

// export default function App() {
//   return (
//     <Post />
//   );
// }
