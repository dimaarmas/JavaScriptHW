import React from 'react'
import { useState } from 'react'
import s from './index.module.css'

export default function Counter() {

    let [likes, setLikes] = useState(0);

    const incr = () => {
        setLikes(likes += 1);

    }
    const decr = () => {
        setLikes(likes -= 1);

    }

    return (
        <div className={s.counter_container}>
            <p>{likes}</p>
            <button onClick={decr}>-</button>
            <button onClick={incr}>+</button>
        </div>
    )
}
