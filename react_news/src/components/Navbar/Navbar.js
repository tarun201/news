import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Category from '../Category/Category'

const Nabvar = (props) => (
    <div >
        <div className="row navbar-fixed">
            <nav >
                <div className="nav-wrapper ">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><a href="">Language</a></li>
                    </ul>
                </div>
            </nav>
        </div >

        <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><a href="">Language</a></li>
        </ul>

        
    </div >
)

export default Nabvar