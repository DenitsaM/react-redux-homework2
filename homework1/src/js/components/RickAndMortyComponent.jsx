import React from 'react';
import {getCharacter} from '../services/getCharacters';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class RickAndMortyComponent extends React.Component {
  constructor({ initialState }) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      characters: [],
    };
  }

  componentDidMount() {
      this.loadCharacters();
  }
  loadCharacters() {
    return getCharacter()
      .then(characters => {
        this.setState({
          isLoaded: true,
          characters: characters.results
        });
      })
      .catch(e => this.setState({
        isLoaded: true,
        error
      }));
  }


  render() {
    const { error, isLoaded, characters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="character-cards">
        {
          
          characters.map(character => (
            <Characters
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
            />
          ))
        }
      </div>
      );
    }
  }
  
}
function Characters(props){
    return (     
      <ul className="character-list">        
            <li key={props.id} className="character-item">
              <div>
                <img src={props.image}/>
              </div>
              <h3>{props.name}</h3>
              <span>{props.species}</span>
            </li>        
        </ul>
    )
}

export default RickAndMortyComponent;
// 100 correct ways to do responsive desing