import React from 'react'

const Comment = (props) => {
    return (
        <div className='comment-main'>
            <span>{props.Date}</span>
            <div className='comment-container'>
                <span>{props.Author}</span>
                <span>{props.Comment}</span>
            </div>
            <span>{props.replies}</span>
        </div>
    )
}

export default Comment