const SourceDropdown = (props) => {
    const {sources, selectedSource, changeSelectedSource, gotSource, currentGuess} = props;
    const classes = `guess-dropdown ${currentGuess === 0? "" : gotSource ?  "right-source" : "wrong-source"}`;
    return (
        <select className={classes} onChange={changeSelectedSource} value={selectedSource}>
            {sources.map((source, index) => (
                <option key={index} value={source}>{source}</option>
            ))}
        </select>         
    )
}

export default SourceDropdown;