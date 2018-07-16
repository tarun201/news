import React from 'react'

import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.css'
import Nabvar from '../Navbar/Navbar';

const Layout = (props) => (
    <Aux>
        <div>
            
        <Nabvar selectedLang={props.selectedLang} languages={props.languages} />
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>

);

export default Layout