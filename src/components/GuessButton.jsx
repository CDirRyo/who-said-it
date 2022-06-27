const GuessButton = (props) => {
    const {takeGuess, status} = props;
    return (
        <button onClick={takeGuess}>{status === "playing"? "Guess!" : `You've ${status}!`}</button>
      )
}

export default GuessButton;