type GuessResultsProp = {
  guesses: string[]
}

export default function GuessResults({ guesses }: GuessResultsProp) {
  return (
    <div className="guess-results">
      {guesses.map(guess => {
        const id = crypto.randomUUID();
        return(
          <p key={id} className="guess">{guess}</p>
        )
      })}
    </div>
  )
}