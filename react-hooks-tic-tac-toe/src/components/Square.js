import React from 'react';

const style = {
  backgroundColor: '#282c34',
  borderRadius: '5px',
  color: 'white',
  padding: '15px',
  fontFamily: 'Arial',
  border: '5px solid white',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize:'3em',
  margin:'1px'
}

const Square = (props) => {

	const {value, onclick, pos} = props;
	return (
		<div onClick = {onclick} 
			 style   = {style}
		>
			{value}
		</div>
	);
}

export default Square;