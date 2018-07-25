import React from "react"

// import classes from './Contents.css'    

class Contents extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        news: null,
        category:this.props.match.category
    }

    componentDidMount() {
        fetch("http://localhost:8080/news/" + this.props.match.params.lang + "/" + this.props.match.params.category)
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
                        error: error
                    });
                }
            )
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category!==prevProps.match.params.category) {
            fetch("http://localhost:8080/news/" + this.props.match.params.lang + "/" + this.props.match.params.category)
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
                            error: error
                        });
                    }
                )
        }
    }

    render() {
        if (this.state.error) {
            return <div className="row container">Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return (
                <div className="row container">
                    Loading...
                        <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container ">
                    <div className="col ">
                        {this.state.news.map((item, index) => (
                            <div className="card lsmall ssmall hoverable" key={item.id}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={item.image} alt="" />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{item.title}<i className="material-icons right">more_vert</i></span>
                                    <p><a href={item.link}>Click here to read from source</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{item.title}<i className="material-icons right">close</i></span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }


}

export default Contents