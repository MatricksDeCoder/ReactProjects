import React from 'react';
import './App.css';
import PokemonsContainer from './containers/PokemonsContainer';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

//setup apollo client 
const client = new ApolloClient({
	uri: 'https://graphql-pokemon.now.sh'
});


const App = () => (
    <ApolloProvider client = {client} >
	  <main>
		<PokemonsContainer />
	  </main>
    </ApolloProvider>
);

export default App;
