const CharDropdown = (props) => {
    const {characters, selectedCharacter, changeSelectedCharacter} = props;
    return (
        <select onChange={changeSelectedCharacter} value={selectedCharacter}>
            {characters.map((character, index) => (
                <option key={index} value={character}>{character}</option>
            ))}
        </select>
    )
}

export default CharDropdown;