import Navbar from './navbar'
import Header from './header'
import Rightbar from './rightbar'


const Layout = (props) => (
  <div className="body">
    <Header />
    <Navbar />
    {props.children}
    <Rightbar />
  </div>
)

export default Blayout
