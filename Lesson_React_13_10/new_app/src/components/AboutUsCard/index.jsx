import React from 'react'

export default function AboutUsCard({ title, value, link_title, link_url }) {
    return (
        <div>
            <p>{value}</p>
            <p>{title}</p>
            <a href={link_url}>{link_title}</a>
        </div>
    )
}
