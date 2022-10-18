import React from 'react'
import s from './index.module.css'

export default function Footer() {
    return (
        <section className={s.footer_section}>
            <footer className={['wrapper', s.contacts_block].join(' ')}>
                <div className={s.footer_block}>
                    <p>2019 (с) Все права защищены. БухОне.ру</p>
                    <p>Разработано: BuhOne</p>
                </div>
            </footer>
        </section>

    )
}
