import React, {Component} from 'react';
import './Post.css'


let elems = {
	postTitle: "Dinosaurs are awesome",
	author: "by Stealthy Stegosaurus",
	content: "Check out this body property!",
	comments: "Content: first!"
}

class Title extends Component {
	render() {
		return (
			<h1>{elems.postTitle}</h1>
		)
	}
}
class Author extends Component {
	render() {
		return (
			<p>{elems.author}</p>
		)
	}
}

class Content extends Component {
	render() {
		return (
			<p>{elems.content}</p>
		)
	}
}

class Comments extends Component {
	render() {
		return (
			<p>{elems.comments}</p>
		)
	}
}

export default function Post() {
	return (
		<div>
			<Title />
			<Author />
			<Content />
			<Comments />
		</div>
	);
}