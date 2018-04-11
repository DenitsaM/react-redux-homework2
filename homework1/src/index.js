import './main.scss';
import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './js/components/header';
import RickAndMortyView from './js/views/RickAndMortyView';
import RickAndMortyComponent from './js/components/RickAndMortyComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route path="/search" component={RickAndMortyView} />
          <Route path="/" component={RickAndMortyComponent} exact/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

