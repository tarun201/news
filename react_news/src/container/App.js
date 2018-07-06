import React, { Component } from 'react';

import './App.css';
import Home from '../components/Home/Home'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/news")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            news: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, news } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Home error={error} isLoaded={isLoaded} news={news} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
