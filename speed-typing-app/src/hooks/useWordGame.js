import {useState, useRef} from "react";

const useWordGame = () => {

    const GAME_TIME = 10;
    const [text, setText] = useState("");
    const [timeLeft, setTimeLeft] = useState(GAME_TIME);
    const [isTimerRunning, setIsTimerRunning]= useState(false);
    const [wordCount, setWordCount] = useState(0);
    const inputRef = useRef();

    const computeWords = () => {    
    return text.trim().split(" ").filter(word => word!=="").length;    
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setText(value);
    }

    const handleClick = (event) => {    
        setTimeLeft(GAME_TIME);
        setText("");
        inputRef.current.focus();
        setIsTimerRunning(true);
    }

    return [ 
        text, 
        timeLeft,
        setTimeLeft,
        isTimerRunning,
        setIsTimerRunning,
        wordCount,
        setWordCount,
        inputRef,
        computeWords,
        handleChange,
        handleClick
       ] 
}

export default useWordGame;