import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import Users from '../Users'
import s from './index.module.css'

export default function UsersContainer() {

    const { users } = useContext(Context);

    return (
        <div className={s.users_container}>
            {
                users.map(el => <Users key={el.id} {...el} />)
            }
        </div>
    )
}
