const SourceDropdown = (props) => {
    const {sources, selectedSource, changeSelectedSource} = props;
    return (
        <select onChange={changeSelectedSource} value={selectedSource}>
            {sources.map((source, index) => (
                <option key={index} value={source}>{source}</option>
            ))}
        </select>
    )
}

export default SourceDropdown;