import React from 'react'
import './App.css'
import Header from './components/header/Header.js'
import Word from './components/word/Word'
import Wrong from './components/wrong/Wrong'
import Lifes from './components/lifes/Lifes'
import { getWrongLetters, getRightLetters } from './util/helper'

function App() {
    const [word, setWord] = React.useState('hangman')
    const [userInputs, setUserInputs] = React.useState([])

    React.useEffect(() => {
        document.onkeydown = handleInputs
        console.log(getRightLetters(word, userInputs))
        if (getRightLetters(word, userInputs).join('') === word) {
            alert('You won')
            setUserInputs([])
        }
    }, [userInputs])
    const handleInputs = e => {
        const charRegex = /^[A-z]$/
        if (charRegex.test(e.key)) {
            //console.log([...userInputs, e.key])
            if (!userInputs.includes(e.key)) {
                setUserInputs([...userInputs, e.key])
            }
        }
    }
    const onEnd = () => {
        alert('End game.You Lose!!')
        setUserInputs([])
    }
    const wrongInputs = getWrongLetters(word, userInputs)
    return (
        <div className='App'>
            <Header />
            <Wrong wrong={wrongInputs} />
            <Word word={word} userInputs={userInputs} />
            <Lifes lifes={6 - wrongInputs.length} onEnd={onEnd} />
        </div>
    )
}

export default App
