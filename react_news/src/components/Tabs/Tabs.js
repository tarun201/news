import React from 'react'

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
                    <div className={"col s12 "+classes.Div}>
                        <ul className="tabs">
                            {this.props.categories.map((item, index) => (
                                <li key={index} className="tab col s3">
                                    {/* <a href={"#" + item.category}> */}
                                        <button onClick={this.props.chash} value={item.chash} className={"btn "+classes.Btn}>
                                            {item.category}
                                        </button>
                                        {/* </a> */}
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