import React from 'react'

export default function Post({ title, body }) {
    return (
        <div>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}
