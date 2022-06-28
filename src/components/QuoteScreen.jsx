const QuoteScreen = (props) => {
    const {quote, status, source, character} = props;
    const imageName = source.toLowerCase().split(" ").join("-");
    const gradient = "linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52))";
    const styles = {
        backgroundImage: `${gradient}, url(${process.env.PUBLIC_URL}/imgs/${imageName}.jpg)`,
        backgroundSize: "cover"
    };

    return (
      <div className={"quote-screen"} style={status === "won"? styles : undefined}>
        <p className="quote">"{quote}"</p>
        {status === "won" && <p className="character-name">- {character}</p>}
      </div>
        )
}

export default QuoteScreen;