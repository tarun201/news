import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Rightbar = (props) => (
    <div className="right">
        <h3>Categories</h3>
        {props.categories.map(({ category }) => (
            <div className='list' key={category}>
                <span className='categories'>
                    {category}
                </span>
            </div>
        ))}
        
    
<style jsx>{`
    div{
        margin-top:3%;
        width: 30%;
        display: inline-block;
        float: left;
        margin-right: 5%;
        margin-left: 1%;
        padding: 2%;
        border: 1px solid black;
        border-radius: 10px;
    }
`}</style>
</div>
)

Rightbar.getInitialProps = async function () {
    const res = await fetch(`http://localhost:8080/category`)
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      categories: data
    }
  }


export default Rightbar