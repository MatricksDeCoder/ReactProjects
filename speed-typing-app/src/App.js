import React, {useEffect} from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame';

function App() {

  const [
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
        ] = useWordGame();

  useEffect(() => {

    let timer;

    if(timeLeft > 0 && isTimerRunning) {
        timer = setTimeout(() => {
            setTimeLeft(time => time - 1)
        }, 1000)
    } else if(timeLeft === 0) {
      setIsTimerRunning(false);
      const count = computeWords();
      setWordCount(count);
    }
    return () => clearTimeout(timer);
}, [timeLeft, isTimerRunning])
  
  return (
    
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea ref = {inputRef} 
           onChange = {handleChange} 
           value    = {text} 
           name     = "keyInput" 
           disabled = {!isTimerRunning} 
      />      
      <h4>Time remaining: {timeLeft}</h4>
      <button onClick = {handleClick} disabled = {isTimerRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
