import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
var id2;
const Category = (props) => (
  <Layout>
    <div className="body">
      <div className="left" >
        <h1>News</h1>
        {/* loop for each news */}
        {props.news.map(({ title, link, date, id, category, image }) => (
          <div className="news" key={id}>
          {/* Image for a news */}
            <div className="image">
              <img src={image} />
            </div>
            {/* Other details of news */}
            <div className="info">
              <Link href={`${link}`}>
                <a><h3>{title}</h3></a>
              </Link>
              <p><span>Date:</span> {date}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="right">
        <h3>Categories</h3>
      </div>
    </div>
    <style jsx>{`

      h1{
        color: red;
      }

      div.left{
        margin-top:3%;
        width: 50%;
        display: inline-block;
        float: left;
        margin-left: 5%;
        padding: 2%;
        border: 1px solid black;
        border-radius: 10px;
      }
      div.right{
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
      div.info{
        display: inline-block;
        width: 70%;
      }
      div.image{
        display: inline-block;
        width: 30%;
        
      }
      img{
        border-radius: 10px;
        width: 90%;
        height: 90%;
      }
      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        text-decoration: underline;
      }
      span{
        font-weight: bold;
      }

    
    `}</style>
  </Layout>
)

Category.getInitialProps = async function (context) {
  const id=context.query.category;
  id2=context.query.category;
  const res = await fetch(`http://localhost:8080/news/category/${id}`)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data,
    news: data
  }
}

export default Category