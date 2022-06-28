const CharDropdown = (props) => {
    const {characters, selectedCharacter, changeSelectedCharacter, currentGuess, gotCharacter} = props;
    const classes = `guess-dropdown ${currentGuess === 0? "" : gotCharacter ?  "right-character" : "wrong-character"}`;
    return (       
        <select className={classes} onChange={changeSelectedCharacter} value={selectedCharacter}>
            {characters.map((character, index) => (
                <option key={index} value={character}>{character}</option>
            ))}
        </select>       
    )
}

export default CharDropdown;