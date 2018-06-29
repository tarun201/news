import Head from 'next/head'
import Navbar from './navbar'
// import Header from './header'
// import Rightbar from './rightbar'
import Footer from './footer'

const Blayout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
      <script src="../static/javascript.js" />

      </Head>
      {/* <Header /> */}
      <Navbar />
      {props.children}
      {/* <Rightbar /> */}
      <Footer />
      <style jsx global>{`
      body{
        width:100%;
        font-family: 'Times New Roman', Times, serif;
      }
    `}</style>
    </div>
    )
  
  export default Blayout
