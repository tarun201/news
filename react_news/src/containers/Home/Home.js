import React from 'react'

import Contents from '../../components/Contents/Contents'

class Home extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        news: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/news/lang/" + this.props.lang)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        news: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    componentDidUpdate(prevProps) {
        if (this.props.lang !== prevProps.lang) {
            fetch("http://localhost:8080/news/lang/" + this.props.lang)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            news: result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    render() {
        return (
            <Contents error={this.state.error} isLoaded={this.state.isLoaded} news={this.state.news} />
        )
    }


}

export default Home