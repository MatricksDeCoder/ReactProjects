import React from 'react';
import Square from './Square';

const style = {
	margin: '50px auto',
	width: '50vw',
	height: '50vw',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
	cursor: 'pointer'
}

const Board = (props) => {
     
	const {onclick, squares} = props;
	
	return (
		   <div style = {style} >
			   {squares.map((square,i) => {
				   return <Square key={i} onclick = {() => onclick(i)} value ={square}/>
			   })}
		   </div>
 
	);
}

export default Board;