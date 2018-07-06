import React from "react"

const Contents = (props) => {

    if (props.error) {
        return <div>Error: {props.error.message}</div>;
    } else if (!props.isLoaded) {
        return (
            <div className="row">
                Loading...
                    <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="col ">
                    {props.news.map((item, index) => (
                        <div className="card lsmall ssmall" key={item.id}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={item.image} alt="" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{item.title}<i className="material-icons right">more_vert</i></span>
                                <p><a href={item.link}>This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{item.title}<i className="material-icons right">close</i></span>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default Contents