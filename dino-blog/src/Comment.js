import React from 'react'

const Comment = (props) => {
	return (
		<li>{props.username} said: "{props.comment}"</li>
	)
}

export default Comment
