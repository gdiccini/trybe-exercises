import React from 'react';
import Pokemon from './Pokemon'
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <ul>
      {pokemons.map(element => <Pokemon poke={element} />)}
    </ul>
    );
  }
}

export default Pokedex;