import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
    return (
        <div className={s.nav_menu}>
            <Link to='home_page'>Home</Link>
            <Link to='about_page'>About</Link>
            <Link to='categories_page'>Categories</Link>
        </div>
    )
}
