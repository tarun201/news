import Navbar from './navbar'
// import Header from './header'
import Rightbar from './rightbar'



const Blayout = (props) =>(
    <div className="body">
      {/* <Header /> */}
      <Navbar />
      {props.children}
      <Rightbar />
      <style jsx>{`
      .body{
        width:100%;
      }
    `}</style>
    </div>
  )

export default Blayout
