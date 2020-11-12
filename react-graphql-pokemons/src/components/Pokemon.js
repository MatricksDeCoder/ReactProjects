import React from 'react';

const Pokemon = props => {

     const {pokemon, onclick} = props;
	 
	 return (
		<div className='pokemon' onClick ={() => onclick(pokemon.id, pokemon.name)} >
		  <div className = "pokemon-name">
			{pokemon.name}
		  </div>
		  <div className = "pokemon-image">
			<img src = {pokemon.image} alt={pokemon.name} />
		  </div>
		  <div className = "pokemon-classification">
		  {`Type: ${pokemon.classification}`}
		  </div>
		</div>
	);
}

export default Pokemon;

