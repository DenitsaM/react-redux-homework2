import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import { searchCharacter } from '../services/getCharacters';
import CharacterDetail from '../components/characterDetail';

function CharacterResult({ character, path, id }) {
  return (
    <div>
      <Link to={`${path}/${id}`}>{character.name}</Link>
    </div>
  );
}

class RickAndMortyCharacterView extends Component {
  constructor(props) {
    super(props);

    this.getCharacter = this.getCharacter.bind(this);

    this.state = {
      searchResults: []
    };
  }

  getCharacter(name) {
    return searchCharacter(name)
      .then(results => {
        this.setState({ searchResults: results });  
    })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    const params = queryString.parse(window.location.search);

    if (!!params.name) {
      this.getCharacter(params.name);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <h1>Info:</h1>

        {
          this.state.searchResults.map(result =>
            <CharacterResult
              key={result.name}
              character={result}
              path={this.props.match.path}
              id= {result.id}
            />
          )
        }
      </div>
    );
  }
}

export default RickAndMortyCharacterView;