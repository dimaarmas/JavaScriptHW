import React from 'react'
import Comment from '../Comment'
import CommentsForm from '../CommentForm'

export default function CommentsContainer({ id, comments, add_comment }) {
    return (
        <div>
            {
                comments.map(el => <Comment key={el.id} {...el} />)
            }

            <CommentsForm add_comment={add_comment} id={id} />
        </div>
    )
}
