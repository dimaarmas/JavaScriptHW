import React from 'react'
import AddTeamForm from '../../components/AddTeamForm'
import AddUserForm from '../../components/AddUserForm'

export default function ConfigurationsPage({ teams, add_team }) {
    return (
        <div>
            <AddTeamForm add_team={add_team} />
            <AddUserForm teams={teams} />
        </div>
    )
}
