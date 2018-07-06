import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Link } from 'react-router-dom'
import Contents from '../Contents/Contents'
import Category from '../Category/Category'
const Home = (props) => {
    return (
        <div>
            <Navbar />
            {/* <Tabs /> */}
            <Contents error={props.error} isLoaded={props.isLoaded} news={props.news} />
            {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
            <Route path="/" exact Component={Home} />
        <Route path="/category" Component={Category} />
        </div>
    )

}

export default Home