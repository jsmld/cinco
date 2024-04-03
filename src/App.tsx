import { ChangeEvent, FormEvent, useState } from 'react'

function App() {

const [guess, setGuess] = useState('')

const handleSubmit = (e: FormEvent) => {
  e.preventDefault()
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
    </>
  )
}

export default App
