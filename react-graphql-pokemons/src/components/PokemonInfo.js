import React from 'react';

const PokemonInfo = props => {

     const {pokemon} = props;
	 return (
		<div className='pokemonInfo' >
		  <div className = "pokemon-name">
			{pokemon.name}
		  </div>
		  		
		  <div className="pokemon-meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
          </div>
		   <div className="pokemon-meta">
                <span>{pokemon.weight.minimum}</span>
                <span>{pokemon.weight.maximum}</span>
          </div>
		   <div className="pokemon-meta">
                <span>{pokemon.height.minimum}</span>
                <span>{pokemon.height.maximum}</span>
          </div>
		  
		  <div className = "pokemon-image">
			<img src = {pokemon.image} alt={pokemon.name} />
		  </div>
		  <div className="pokemon-attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))}
          </div>
		  
		</div>

	);
}

export default PokemonInfo;

