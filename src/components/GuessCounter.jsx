const GuessCounter = (props) => {
    const {tracker} = props;
    const rightGuess = (key) => (<div key={key} className="guess-tracker right-guess"></div>)
    const wrongGuess = (key) => (<div key={key} className="guess-tracker wrong-guess"></div>)
    const currentGuess = (key) => (<div key={key} className="guess-tracker current-guess"></div>)
    const notGuessed = (key) => (<div key={key} className="guess-tracker"></div>)

    return (
        <div>
            {tracker.map((guess, index) => (
                guess === "right"? rightGuess(`g${index}`) :
                guess === "wrong"? wrongGuess(`g${index}`) :
                guess === "current"? currentGuess(`g${index}`) :
                notGuessed(`g${index}`)
                ))}
        </div>
      )
}

export default GuessCounter;