import React, {useState} from 'react';
import Board from './Board';
import winnerFunction from '../helpers';

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = (props) => {
	
    const [boards, setBoards] = useState([Array(9).fill(null)]);
	const [step, setStep] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const winner = winnerFunction(boards[step]);
	
	const handleClick = (i) => {
		
		const newBoards = boards.slice(0, step+1);
		const currBoard = newBoards[step];
		const squares   = [...currBoard]
		
		if(winner || squares[i]) {return}
		let entry; 
		
		if(xIsNext) {
			entry = 'X';
		} else {
			entry = 'O';
		}
		
		squares[i]	= entry;
		
		setBoards([...newBoards, squares]);
		setStep(newBoards.length);
		setXIsNext(!xIsNext);
	}	
	
	const stepIntoHistory = i => {
		setStep(i);
		setXIsNext(step%2 == 0);
	}
	
	const renderHistory = () => {	
		
		return boards.map((_board,i) => {
			const txt = i? `Go to move: ${i}`:`Start Game`;
			return <li key={i}><button onClick = {() => stepIntoHistory(i)}>{txt}</button></li>
		})
	}	
		

	return (
		<>			
			<div style = {styles}>
			<p>{winner? 'Winner is: ' + winner: xIsNext? 'Next Player Is: X': 'Next Player Is: Y'}</p>
			{renderHistory()}			
			</div>
			<Board squares = {boards[step]} onclick = {handleClick} />
		    
		</>
	);
}
	
export default Game;
