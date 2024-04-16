import { ChangeEvent, FormEvent, useState } from 'react'
import GuessResults from './components/GuessResults'

function App() {

const [guess, setGuess] = useState('')
const [guesses, setGuesses] = useState<string[]>([])

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
  setGuesses([...guesses, guess])
  console.log({guess})
  setGuess('')
}

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setGuess(e.target.value.toUpperCase())
}

  return (
    <>
      <h1>Cinco</h1>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={handleChange}/>
      </form>
      <GuessResults guesses={guesses}/>
    </>
  )
}

export default App
