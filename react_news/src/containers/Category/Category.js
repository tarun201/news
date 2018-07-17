import React from 'react'

import Contents from '../../components/Contents/Contents'
import Aux from '../../hoc/Aux/Aux';
import Tabs from '../../components/Tabs/Tabs'

class Category extends React.Component {

    state = {
        tabs_error: null,
        tabs_isLoaded: false,
        tabs: [],
        news_error: null,
        news_isLoaded: false,
        news: null,
        selected_category: ""
    }

    componentDidMount() {
        fetch("http://localhost:8080/category/" + this.props.lang)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tabs_isLoaded: true,
                        tabs: result,
                        selected_category: result[0].chash
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
        if (this.state.selected_category === "") {
            fetch("http://localhost:8080/news/" + this.props.lang + "/latest")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            news_isLoaded: true,
                            news: result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            news_isLoaded: true,
                            news_error: error
                        });
                    }
                )
        }

    }

    componentDidUpdate(prevProps,prevStates) {
        if (this.props.lang !== prevProps.lang || this.state.selected_category !== prevStates.selected_category) {
            fetch("http://localhost:8080/category/" + this.props.lang)
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

            fetch("http://localhost:8080/news/" + this.props.lang + "/" + this.state.selected_category)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            news_isLoaded: true,
                            news: result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            news_isLoaded: true,
                            news_error: error
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
                <Tabs selectedCategory={this.state.selected_category} chash={this.categoryHandler} error={this.state.tabs_error} isLoaded={this.state.tabs_isLoaded} categories={this.state.tabs} />
                <Contents error={this.state.news_error} isLoaded={this.state.news_isLoaded} news={this.state.news} />
                {/* <p>{this.state.selected_category}</p> */}
            </Aux>
        )
    }
}

export default Category