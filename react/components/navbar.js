import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
    <style jsx>{`
      a {
        text-decoration: none;
        color: whitesmoke;
      }
      a:hover {
        opacity: 0.6;
      }
      div{
        background: black;
        padding: 0.5%;
        margin-bottom: 0.5%;
        border-radius: 5px;
        padding-left: 3%;
        position: fixed;
        width: 100%;
      }
    `}</style>
  </div>
)

export default Header
