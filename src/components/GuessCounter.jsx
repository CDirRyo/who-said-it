const GuessCounter = (props) => {
    const {tracker} = props;
    const rightGuess = (key) => (<div key={key} className="guess right-guess"></div>)
    const wrongGuess = (key) => (<div key={key} className="guess wrong-guess"></div>)
    const currentGuess = (key) => (<div key={key} className="guess current-guess"></div>)
    const notGuessed = (key) => (<div key={key} className="guess"></div>)

    return (
        <div className="guess-tracker">
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