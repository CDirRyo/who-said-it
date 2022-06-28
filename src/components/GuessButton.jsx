const GuessButton = (props) => {
    const {takeGuess, status} = props;
    const classes = status === "won"? "guess-button won-button" : status === "lost"? "guess-button lost-button" : "guess-button";
    return (
        <button className={classes} onClick={takeGuess}>{status === "playing"? "Guess!" : `You've ${status}!`}</button>
      )
}

export default GuessButton;