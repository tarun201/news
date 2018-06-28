import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
  <div>
    <Link href="javascript:void(0)"><a class="active" >Home</a></Link>
    <Link href="javascript:void(0)"><a>News</a></Link>
    <Link href="javascript:void(0)"><a>Contact</a></Link>
  </div>
)

export default Navbar
