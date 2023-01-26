import React from 'react'
import Button from '../Button'
import s from './index.module.css'
import { GlobalOutlined } from '@ant-design/icons'

import logo from '../../media/logo_pic.png'

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.header_content}>
                <nav>
                    <ul>
                        <li>Products</li>
                        <li>Recureces</li>
                        <li>Inspiration</li>
                        <li>Priccing</li>
                    </ul>
                </nav>
                <img src={logo} alt="logo" />

                <div className={s.info_block}>
                    <p>Sales: <br /> +1 (800) 315-5939</p>
                    <GlobalOutlined className={s.glob_icon} />
                    <p className={s.search_btn}>Search</p>
                    <p>Login</p>
                    <Button />
                </div>
            </div>
        </header>
    )
}
