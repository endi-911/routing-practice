import { useParams } from "react-router-dom";
const Style = () => {
const {word, color1, color2} = useParams();
    return(
        <>
            <h1 style={{backgroundColor: `${color1}`, color: `${color2}`}}> {isNaN(word) ? <p>The word is {word}</p> : <p>The number is {word}</p> }  </h1>
        </>
    )
}
export default Style;