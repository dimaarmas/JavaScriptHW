import React from 'react'
import s from './index.module.css'
import { services } from '../../data/services'
import ServiceCard from '../ServiceCard'

export default function Services() {
    return (
        <section className={s.services_section}>
            <div className={['wrapper', s.services_block].join(' ')}>
                <p className='subheader'>Our Services</p>
                <h2>Мы специализируемся</h2>
                <div className={s.cards_container}>
                    {
                        services.map(el => <ServiceCard key={el.id} {...el} />)
                    }
                </div>
            </div>
        </section>
    )
}
