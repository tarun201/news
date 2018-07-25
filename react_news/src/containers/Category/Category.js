import React from 'react'
import { Route } from 'react-router-dom'

import Contents from '../Contents/Contents'
import Aux from '../../hoc/Aux/Aux';
import Tabs from '../../components/Tabs/Tabs'

class Category extends React.Component {

    state = {
        tabs_error: null,
        tabs_isLoaded: false,
        tabs: [],
        selected_category: "",
    }

    componentDidMount() {

        fetch("http://localhost:8080/category/" + this.props.match.params.lang)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tabs_isLoaded: true,
                        tabs: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        tabs_isLoaded: true,
                        tabs_error: error
                    });
                }
            )
        

    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.props.match.params.lang !== prevProps.match.params.lang) {
            fetch("http://localhost:8080/category/" + this.props.match.params.lang)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            tabs_isLoaded: true,
                            tabs: result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            tabs_isLoaded: true,
                            tabs_error: error
                        });
                    }
                )
        }
    }

    categoryHandler = (event) => {
        // console.log("was clicked");
        this.setState({
            selected_category: event.target.value
        })
    }

    render() {
        return (
            <Aux>
                {/* {console.log(this.state.news)} */}
                <Tabs
                    selectedCategory={this.state.selected_category}
                    chash={this.categoryHandler}
                    error={this.state.tabs_error}
                    isLoaded={this.state.tabs_isLoaded}
                    categories={this.state.tabs}
                    lang={this.props.match.params.lang}
                />

                <Route
                    path="/lang/:lang/:category"
                    exact
                    render={(props) => <Contents {...props} lang={this.state.lang} />}
                />

                <Route
                    path="/lang/:lang"
                    exact
                    render={() => <h1>Choose a category</h1>}
                />

                

                {/* <Contents error={this.state.news_error} isLoaded={this.state.news_isLoaded} news={this.state.news} /> */}
                {/* <p>{this.state.selected_category}</p> */}
            </Aux>
        )
    }
}

export default Category