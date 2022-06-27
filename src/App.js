import './App.css';
import {useState, useEffect, useRef} from 'react';
import {getQuote} from "./utils/getQuote.mjs";
import QuoteScreen from "./components/QuoteScreen";
import CharDropdown from './components/CharDropdown';
import SourceDropdown from './components/SourceDropdown';
import GuessButton from './components/GuessButton';
import GuessCounter from './components/GuessCounter';

function App() {
    const firstRenderRef = useRef(true);
    const sources = ["Breaking Bad", "Friends", "Game of Thrones"];  
    const characters = 
        {"Breaking Bad": [
            'Badger',
            'Gustavo Fring',
            'Hank Schrader',
            'Jesse Pinkman',
            'Mike Ehrmantraut',
            'Saul Goodman',
            'Skyler White',
            'The fly',
            'Walter White',
            'Walter White Jr'
          ],
          "Friends": [ 
            'Chandler', 
            'Joey', 
            'Monica', 
            'Phoebe', 
            'Rachel', 
            'Ross' 
        ],
        "Game of Thrones": [
            'Jon Snow',
            'Sansa Stark',
            'Eddard "Ned" Stark', 
            'Jaime Lannister',
            'Tyrion Lannister',   
            'Cersei Lannister',
            'Joffrey Baratheon',  
            'Aerys II Targaryen',
            'Daenerys Targaryen', 
            'Tywin Lannister',
            'Ramsay Bolton',   
            'Arya Stark',
            'Robert Baratheon',   
            'Theon Greyjoy',
            'Samwell Tarly',      
            'Lord Varys',
            'Bran Stark',         
            'Brienne of Tharth',
            'Petyr Baelish',      
            'Tormund',
            'Melisandre',         
            'Olenna Tyrell',
            'Mance Rayder'
        ]};
    const maxGuesses = 3;

    const [gotItRight, setgotItRight] = useState(
        {
            character: false, 
            source: false
        }
    );
    const [gameInfo, setGameInfo] = useState(
        {
            status: "playing", 
            currentGuess: 0, 
            tracker: ["current", null, null]
        }
    );
    const [selectedGuess, setSelectedGuess] = useState(
        {
            character: characters["Breaking Bad"][0],
            source: "Breaking Bad"
        }
    );

    const [answers, setAnswers] = useState(
        {
            source: "",
            character: "",
            quote: ""
        }
    );
    

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        const numberOfSources = sources.length;
        const randomIndex = Math.floor(Math.random() * numberOfSources);
        const source = sources[randomIndex];
        getQuote(source, setAnswers);
    }, []);

    
    const changeSelectedCharacter = e => {
        const character = e.target.value;
        setSelectedGuess(prev => ({...prev, character}));
    };

    const changeSelectedSource = e => {
        const source = e.target.value;
        setSelectedGuess({source, character: characters[source][0]})
    };

    const takeGuess = () => {
        if (gameInfo.status === "playing") {
            const isRightShow = selectedGuess.source === answers.source;
            const isRightCharacter = selectedGuess.character === answers.character;
        
            const trackGuess = (guesses, guessResult) => {
                const currentGuess= gameInfo.currentGuess;
                const isLastGuess = currentGuess === maxGuesses - 1;
                const isRight = guessResult === "right";
                let newGuesses = [...guesses];
                newGuesses[currentGuess] = guessResult;

                if ( !isRight && !isLastGuess ) {
                    newGuesses[currentGuess + 1] = "current";
                }

                return newGuesses;
            }
    
            if (isRightShow && isRightCharacter) {
                setGameInfo(prev => (
                    {
                        ...prev,
                        status: "won",
                        tracker: trackGuess(prev.tracker, "right"),
                    }
                ))
                setgotItRight(
                    {
                        character: true, 
                        source: true
                    }
                )   
            }
    
            else {
                if (isRightCharacter) {
                    setgotItRight(prev => ({
                        ...prev,
                        character: true
                    }))                  
                }
                if (isRightShow) {
                    setgotItRight(prev => ({
                        ...prev,
                        source: true
                    }))                    
                }
                setGameInfo(prev => {
                    const currentGuess = prev.currentGuess + 1;
                    const status = currentGuess === maxGuesses? "lost" : "playing";
                    const tracker = trackGuess(prev.tracker, "wrong");
                    return {currentGuess, status, tracker};
                }) 
            }          
        }
         
    }

  return (
    <div className="App">
        <QuoteScreen quote={answers.quote} status={gameInfo.gameStatus}/>
        <GuessCounter tracker={gameInfo.tracker}/>   
        <SourceDropdown gotSource={gotItRight.source} sources={sources} selectedSource={selectedGuess.source} changeSelectedSource={changeSelectedSource}/>               
        <CharDropdown gotCharacter={gotItRight.source.character} characters={characters[selectedGuess.source]} selectedCharacter={selectedGuess.character} changeSelectedCharacter={changeSelectedCharacter}/>
        <GuessButton takeGuess={takeGuess} status={gameInfo.status}/>        
    </div>
  );
}

export default App;
