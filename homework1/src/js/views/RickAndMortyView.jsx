import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import RickAndMortyCharacterView from './RickAndMortyCharacterView';
import CharacterDetail from '../components/characterDetail';

class SearchRickandMortyCharacterForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      character: "",
      hasSubmitted: false,
    };
  }

  handleChange({ target }) {
    this.setState({ character: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ hasSubmitted: true });
  }

  render() {
    if (this.state.hasSubmitted) {
      return <Redirect to={`${this.props.match.path}/character?name=${this.state.character}`} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Search your favourite Rick Morty character</h1>
        <input type="text" value={this.state.character} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    );
  }
}

class RickAndMortyView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { path } = this.props.match;

    return (
      <React.Fragment>
        <Route path={`${path}/character`} component={RickAndMortyCharacterView} exact />
        <Route path={path} component={SearchRickandMortyCharacterForm} exact />
        <Route path={`${path}/character/:id`} component={CharacterDetail} />
      </React.Fragment>
    );
  }
}

export default RickAndMortyView;