import React, { Component } from 'react';
import { getSpecificCharacter } from '../services/getCharacters';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const char_id = this.props.match.params.id;
    fetch(`https://rickandmortyapi.com/api/character/${char_id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            character: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <Character
            key={this.state.character.id}
            image={this.state.character.image}
            name={this.state.character.name}
            status={this.state.character.status}
          />
        )
    }
  }
}

export default CharacterDetail;

function Character(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Status: {props.status}</h4>
      <img src={props.image} alt="" />
    </div>
  )
}