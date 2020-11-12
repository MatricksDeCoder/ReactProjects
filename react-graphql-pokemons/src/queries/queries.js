import gql from 'graphql-tag';

export const getPokemons = gql`
	query pokemons($first: Int!) {
		pokemons(first: $first) {
			id,
			name,
			classification,
			image
		}
	}
`


export const getPokemon =gql`
	query pokemon($id: String, $name: String) {
		pokemon(id: $id, name: $name) {
			name,
			image,
			weight {
				minimum,
				maximum
			},
			height {
				minimum,
				maximum
			}
			types,
			resistant,
			attacks {
				fast {
				  name, 
				  type,
				  damage
				},
				special {
				   name, 
				  type,
				  damage
				}
			},
			weaknesses,
			fleeRate,
			maxCP,
			maxHP,
			evolutions {
				id,
				name,
				types,
				resistant			  
			}
			
		}
	}
`
