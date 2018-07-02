import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <Link href="/"><a className="navbar-brand" >News</a></Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
            <a className="nav-link" href="#">Home</a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
        </ul>
      </div>
    </nav>
  </div >
)

export default Navbar