import { useParams } from "react-router-dom";
const Word = () => {
    const {word} = useParams()
    return(

        <>
            <h1> {isNaN(word) ? <p>The word is {word}</p> : <p>The number is {word}</p> }  </h1>
        </>
    )
}

export default Word;