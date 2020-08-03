import React from 'react'

export default function Comments(props) {

    let commentsList =
        props.comments.map((comment, i) => {
            return (
                <div className="commentContainer">
                    <br/>
                    <p>comment:</p>
                    {comment}
                </div>
            )
    })

    

    return (
        <div>
            {commentsList}
        </div>
    )
}