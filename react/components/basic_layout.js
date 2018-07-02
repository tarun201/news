import Head from 'next/head'
import Navbar from './navbar'
// import Header from './header'
// import Rightbar from './rightbar'
const margin = {
  marginTop:'5%',
  
}

const Blayout = (props) => (
  <div className="container-fluid">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    </Head>
    <div className="row">
      <Navbar />
    </div>
    
    <div className="row" style={margin}>
      {props.children}
    </div>
    <style jsx>{`
      body{
        font-family: 'Times New Roman',Arial, Helvetica, sans-serif;
      }
    `}</style>
    
  </div>
)

export default Blayout
