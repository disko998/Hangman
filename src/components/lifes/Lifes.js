import React from 'react'
import './lifes.css'

export default function Lifes({ lifes, onEnd }) {
    React.useEffect(() => {
        checkLifes()
    }, [lifes])
    const checkLifes = () => {
        if (lifes == 0) {
            onEnd()
        }
    }
    return <div className='lifes'>💟 {lifes}</div>
}
