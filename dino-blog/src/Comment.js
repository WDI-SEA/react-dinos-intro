import React, { Component } from 'react'

class Comment extends Component {
	render(){

		return (
			<li>{this.props.username}: "{this.props.comment}"</li>
		)
	}
}

export default Comment
