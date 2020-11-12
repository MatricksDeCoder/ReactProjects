import React, {useState} from 'react';
import Pokemon from '../components/Pokemon';
import {getPokemons, getPokemon} from '../queries/queries';
import {useQuery} from '@apollo/react-hooks';
import PokemonInfo from '../components/PokemonInfo';

const PokemonsContainer = props => {

	const [counter, setCounter] = useState(2);
	const [idClicked, setIdClicked] = useState("UG9rZW1vbjowMDE="); //selectedPokemon
	const [nameClicked, setNameClicked] = useState("Bulbasaur");
		
	const handleClick = (id, name) => {
		console.log(`clicked ${id} - ${name}`)
		setIdClicked(id);
		setNameClicked(name);
	}
	
	const {data: {pokemons=[]}={}} = useQuery(getPokemons, {
        variables: { first: counter },
    })
	console.log(pokemons);
	
	let dataPokemon = useQuery(getPokemon, {
        variables: { id: idClicked, name: nameClicked },
    })
    dataPokemon = dataPokemon.data;
	console.log(dataPokemon);
	
	const updateCount = (e)=> {
		
		let currCount;
		if(e.target.name === 'increase') {
			if(counter === 10) {
				return;
			}
			currCount = counter+1;
		}
		if(e.target.name === 'decrease') {
			if(counter === 2) {
				return;
			}
			currCount = counter-1;
		}
		setCounter(currCount);
		
	}
	
	let renderPokemons = !pokemons.length ? <div className="loader"></div> : (
		pokemons.map(pokemon => <Pokemon 
				key = {pokemon.id}
				pokemon = {pokemon}
				onclick = {handleClick}
		/>)
	)
	
	let renderPokemon = dataPokemon === undefined? <div className="loader"></div> : (
		<PokemonInfo pokemon = {dataPokemon.pokemon} /> )
	
	return (
	 
		<div style= {{textAlign:'center', color:'#0275d8 '}} >
			<div><h3>{"Pokemon Heaven! Click On Pokemon for more info! "}</h3></div>
			<div>
			    <span><p>{"Select Number Of Pokemon To Display: "}</p></span>
				<span><button >{counter}</button></span>
				<span><button name= 'increase' onClick = {updateCount}>+</button></span>
				<span><button name= 'decrease' onClick = {updateCount}>-</button></span>
			</div>
			<h3>Selected Pokemon</h3>
			<div className="container">
				{renderPokemon}
			</div>
			<div className ="container">
				{renderPokemons}
			</div>
		</div>

	)
	
}

export default PokemonsContainer;
