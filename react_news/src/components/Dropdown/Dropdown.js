import React from 'react'

import classes from'./Dropdown.css'

import Aux from '../../hoc/Aux/Aux'

const Dropdown = (props) => (
    <ul id={props.id} className="dropdown-content">
        {props.languages.map((language, index) => (
            <Aux key={index}>
                <li>
                    <button className={"waves-effect waves-light btn "+ classes.Btn}  onClick={props.selectedLang} value={language}>
                        {language}
                    </button>
                </li>
                <li className="divider"></li>
            </Aux>
        ))}
    </ul>
)

export default Dropdown