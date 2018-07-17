import React from 'react'

import classes from './Navbar.css'

import Aux from '../../hoc/Aux/Aux'
import Dropdown from '../Dropdown/Dropdown'

const Nabvar = (props) => (
    <Aux>
        
        <div className="row navbar-fixed">
            <nav className={classes.Nav}>
                <div className="nav-wrapper ">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/category">Category</a></li>
                        {/* <!-- Dropdown Trigger --> */}
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown2">Chooose Language<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        </div >
 
        {/* <!-- Dropdown Structure --> */}
        <Dropdown selectedLang={props.selectedLang} langHandler={props.langHandler} id="dropdown1" languages={props.languages} />
        <Dropdown selectedLang={props.selectedLang} langHandler={props.langHandler} id="dropdown2" languages={props.languages} />

        {/* Side Drawer */}
        <ul className="sidenav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            <li><a href="/category">Category</a></li>
            {/* <!-- Dropdown Trigger --> */}
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Choose Language<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    </Aux >
)

export default Nabvar