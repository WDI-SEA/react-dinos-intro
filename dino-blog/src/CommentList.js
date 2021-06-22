import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

	let comments = props.commentsArr.map((c, i) => {
		return <Comment username={c.username} comment={c.message} key={i}/>
	})

	return (
		<>
			<h3>Comments:</h3>
			<ol>
				{comments}
			</ol>
		</>
	)
}

export default CommentList
