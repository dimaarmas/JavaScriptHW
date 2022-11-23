import React from 'react'
import AddUserForm from '../../components/AddUserForm'
import UsersContainer from '../../components/UsersContainer'

export default function UsersPage() {
    return (
        <div>
            <h2>Users:</h2>
            <AddUserForm />
            <UsersContainer />
        </div>
    )
}
