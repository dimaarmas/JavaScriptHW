import React, { useContext } from 'react'
import FormItem from "../FormItem";
import s from './index.module.css'
import { Context } from '../../context'
import { CloseOutlined } from '@ant-design/icons'

export default function Modal() {

    const { modalActive, setModalActive } = useContext(Context);
    console.log(setModalActive)

    return (
        <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
            <div className={s.modal_content}>
                <CloseOutlined className={s.cross_icon} onClick={() => setModalActive(false)} />
                <FormItem
                    title='Registration'
                    button={{ submit: 'Registration', redirect: 'Login' }}
                    infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                    formType={'registration'}
                />
            </div>
        </div>
    )
}
