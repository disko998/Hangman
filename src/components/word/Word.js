import React, { useState } from 'react'
import './word.css'
import Letter from './../letter/Letter'

export default function Word({ word, userInputs }) {
    //const [word, setWord] = useState('hangman');
    const arrWord = word.split('')

    return (
        <div className='word'>
            {arrWord.map(letter =>
                userInputs.includes(letter) ? <Letter letter={letter} /> : <Letter />,
            )}
        </div>
    )
}
