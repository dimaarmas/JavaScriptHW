import React from 'react'

export default function LanguageItem({ id, eng, rus, type, change, removeCard }) {
    return (
        <div onClick={() => change(id)} onDoubleClick={() => removeCard(id)}>
            {type === 'eng' ? rus : eng}
        </div>
    )
}
