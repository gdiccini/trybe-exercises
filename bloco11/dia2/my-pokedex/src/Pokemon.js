import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <li>
        <p>Name: {this.props.poke.name}</p>
        <p>Type: {this.props.poke.type}</p>
        <p>Weight: {this.props.poke.averageWeight.value}{this.props.poke.averageWeight.measurementUnit}</p>
        <img src={this.props.poke.image}></img>
      </li>
    )
  }
}

export default Pokemon;