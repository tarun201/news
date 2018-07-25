import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Tabs.css'

import Aux from '../../hoc/Aux/Aux'


class Tabs extends React.Component {

    render() {
        if (this.props.error) {
            return <div>Error: {this.props.error.message}</div>;
        } else if (!this.props.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <Aux>
                    <div className={"col s12 " + classes.Div}>
                        <ul className="tabs">
                            {this.props.categories.map((item, index) => (
                                <li key={index} className="tab col s3">
                                    <Link to={"/lang/"+this.props.lang+"/"+item.chash}>
                                        <button onClick={this.props.chash} value={item.chash} className={this.props.selectedCategory === item.chash ? "btn " + classes.SelectedBtn : "btn " + classes.Btn}>
                                            {item.category}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                            <br />
                        </ul>
                    </div>
                </Aux>
            );
        }
    }
}

export default Tabs