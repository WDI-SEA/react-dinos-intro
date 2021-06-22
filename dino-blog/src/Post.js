import React from 'react';
import Content from './Content'
import Header from './Header'
import CommentList from './CommentList'
import Author from './Author.js'

let post = {
    header: "Some Dino based Blog Post",
    author: "Nick",
    content: "Brontosaurus had a long, thin neck and a small head adapted for a herbivorous lifestyle, a bulky, heavy torso, and a long, whip-like tail. The various species lived during the Late Jurassic epoch, in the Morrison Formation of what is now North America, and were extinct by the end of the Jurassic. Adult individuals of Brontosaurus are estimated to have weighed up to 15 tonnes (17 short tons) and measured up to 22 metres (72 feet) long. 🦕",
    comments: [
		{username: "DinoDaisy", message: "This brontosaurus speaks the truth."},
		{username: "SkepticalSteve", message: "This is fake news."}, 
		{username: "AppreciativeAlbert", message: "This dinosaur information has changed my life."}
	]
}

const Post = () => {
	return (
		<div>
			<Header header={post.header} />
			<Author author={post.author} />
			<Content content={post.content} />
			<CommentList commentsArr={post.comments} />
		</div>
	)
}

export default Post;