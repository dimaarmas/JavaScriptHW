import React from 'react'

function User({ firstname, lastname, age }) {
    return (
        <div>
            <p>First name: {firstname}</p>
            <p>Last name: {lastname}</p>
            <p>Age: {age}</p>
        </div>

    )
}

export default User