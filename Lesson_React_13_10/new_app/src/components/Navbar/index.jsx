import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './index.module.css'
import { MenuOutlined } from '@ant-design/icons'

export default function Navbar() {
    return (
        <nav className={['wrapper', s.nav_block].join(' ')}>
            <a href="#">
                <img alt="company_logo" src={logo} />
            </a>

            <ul className={s.nav_menu}>
                <li>Главное</li>
                <li>Услуги</li>
                <li>Кейсы</li>
                <li>О компании</li>
                <li>Контакты</li>
            </ul>
            <MenuOutlined className={s.nav_burger} />
        </nav>
    )
}
