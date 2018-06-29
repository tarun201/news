const Rightbar = (props) => (
    <div className="main">
        <p>Categories</p>
        <div className="list">
            {props.children}
        </div>
            
        <style jsx>{`
        div.main{
            margin-top:3%;
            width: 30%;
            display: inline-block;
            float: left;
            margin-left: 1%;
            padding: 2%;
        }
        div.list{
            text-align: justify;
            line-height: 1.5;
        }
        p{
            font-size: 20px;
        }
        `}</style>
    </div>
)


export default Rightbar