import React from 'react'

const Comment = (props) => {
		return (
			<li>{props.username}: "{props.comment}"</li>
		)
	}

export default Comment
