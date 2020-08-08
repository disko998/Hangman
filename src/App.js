import React from 'react'
import './App.css'
import Header from './components/header/Header.js'
import Word from './components/word/Word'
import Wrong from './components/wrong/Wrong'

function App() {
    const [word, setWord] = React.useState('hangman')
    const [userInputs, setUserInputs] = React.useState([])

    React.useEffect(() => {
        document.onkeydown = handleInputs
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

    return (
        <div className='App'>
            <Header />
            <Wrong word={word} userInputs={userInputs} />
            <Word word={word} userInputs={userInputs} />
        </div>
    )
}

export default App
