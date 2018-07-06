import React from 'react'

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/category")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div className="row fixed">
                    <div className="col s12 m12 l12">
                        <ul className="tabs">
                            {items.map((item, index) => (
                                <li key={index} className="tab col s3 m3 l3"><a href={"#" + item.category}>{item.category}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default Tabs