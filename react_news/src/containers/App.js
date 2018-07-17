import React, { Component } from 'react';

import './App.css';

// import Aux from '../hoc/Aux/Aux'
import Layout from '../components/Layout/Layout'
// import Home from './Home/Home';
import Category from './Category/Category';

class App extends Component {

  state = {
    languages: ["hi", "en","kn","mr","bn"],
    selected_lang: "en"
  }

  selectedLangHandler=(event)=> {
    // console.log("was clicked");
    this.setState({
      selected_lang:event.target.value
    })
  }


  render() {
    return (
      <div>
        <Layout selectedLang={this.state.selected_lang} langHandler={this.selectedLangHandler} languages={this.state.languages}>
          {/* <Home lang={this.state.selected_lang} /> */}
          <Category lang={this.state.selected_lang} />
        </Layout>
      </div> 
    );
  }
}

export default App;
