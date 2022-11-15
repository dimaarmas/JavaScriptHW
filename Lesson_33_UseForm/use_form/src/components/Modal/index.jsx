import React, { useContext } from 'react'
import FormItem from "../FormItem";
import s from './index.module.css'
import { Context } from '../../context'
import { CloseOutlined } from '@ant-design/icons'
import { Routes, Route } from 'react-router-dom'

export default function Modal() {

    const { modalActive, setModalActive } = useContext(Context);

    return (
        <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
            <div className={s.modal_content}>
                <CloseOutlined className={s.cross_icon} onClick={() => setModalActive(false)} />
                <Routes>
                    <Route
                        path='/registration'
                        element={
                            <FormItem
                                title='Registration'
                                button={{ submit: 'Registration', redirect: 'Login' }}
                                infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                                formType={'registration'}
                                btn_link={'/login'}
                            />
                        }
                    />

                    <Route
                        path='/login'
                        element={
                            <FormItem
                                title='Login'
                                button={{ submit: 'Login', redirect: 'Registration' }}
                                infoText={'Reset password'}
                                formType={'login'}
                                btn_link={'/registration'}
                            />
                        }
                    />

                    <Route
                        path='/reset_password'
                        element={
                            <FormItem
                                title='Reset password'
                                button={{ submit: 'Send' }}
                                infoText={'The temporary password is valid for 24 hours.'}
                                infoText_2={'To receive a temporary password, you must enter the email address you provided during registration.'}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    )
}
