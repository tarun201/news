import Header from './Header'

const layoutStyle = {
  font: 'Arial',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
  
)

export default Layout
