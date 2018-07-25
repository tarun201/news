import React from 'react'

import { Link } from 'react-router-dom'

import classes from'./Dropdown.css'

import Aux from '../../hoc/Aux/Aux'

const Dropdown = (props) => (
    <ul id={props.id} className="dropdown-content">
        {props.languages.map((language, index) => (
            <Aux key={index}>
                <li>
                    <Link to={"/lang/"+language}><button className={props.selectedLang===language ? "waves-effect waves-light btn "+classes.SelectedBtn:"waves-effect waves-light btn "+ classes.Btn}  onClick={props.langHandler} value={language}>
                        {language}
                    </button></Link>
                </li>
                <li className="divider"></li>
            </Aux>
        ))} 
    </ul>
)

export default Dropdown