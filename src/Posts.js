import React from 'react'

export default function Posts(props) {
    return (
        <div>
            <p>By {props.post.author}</p>
            <br/>
            <p>{props.post.content}</p>
        </div>
    )
}