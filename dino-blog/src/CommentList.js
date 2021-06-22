import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
	render(){
		
		let comments = this.props.commentsArr.map((c, i) => {
			return <Comment username={c.username} comment={c.message} key={i}/>
		})
	
		return (
			<>
				<h3>Comments:</h3>
				<ul>
					{comments}
				</ul>
			</>
		)
	}
}

export default CommentList
