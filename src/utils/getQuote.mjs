import axios from "axios";

const got = axios.create ({
    baseURL: 'https://api.gameofthronesquotes.xyz/v1/'
})


  const bb = axios.create ({
    baseURL: 'https://api.breakingbadquotes.xyz/v1/quotes/'
})


const friends = axios.create ({
    baseURL: 'https://friends-quotes-api.herokuapp.com/quotes/'
})


export const getQuote = async(source, setAnswers) => {
    let data = 
        {
            character: "",
            quote: "",
            source
        };

    if (source === "Friends") {
        await friends.get("random").then(response => {
            data.character = response.data.character;
            data.quote = response.data.quote;
        })
    }

    else if (source === "Breaking Bad") {
        await bb.get().then(response => { 
            console.log(response);           
            data.character = response.data[0].author;
            data.quote = response.data[0].quote;
        })
    }
    else if (source === "Game of Thrones") {
        await got.get("random").then(response => {
            data.character = response.data.character.name;
            data.quote = response.data.sentence;
        })
    }

    setAnswers(data);
} 