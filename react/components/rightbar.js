const Rightbar = (props) => (
    <div className="main col-sm ">
        <div class="container position-fixed  h-100">
        <h4 ><span className="text-info">Categories </span><span className="small text-secondary">(scroll down)</span></h4>
        <nav class="navbar pre-scrollable h-100 text-center">
            <ul className="nav flex-column">
                <li className="nav-item">
                    {props.children}
                </li>
            </ul>
        </nav>
        </div>
    </div>
)


export default Rightbar