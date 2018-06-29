import Blayout from '../components/basic_layout'
import Rightbar from '../components/rightbar'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Language = (props) => (
  <Blayout>
    <div className="content">
      <h1>News</h1>
      {/* loop for each news */}
      {props.news.map(({ title, link, day, time, id, image,category }) => (
        <div className="news" key={id}>
          {/* Image for a news */}
          <div className="image">
            <img src={image} />
          </div>
          {/* Other details of news */}
          <div className="info">
            <Link href={`${link}`}>
              <a className="title"><h3>{title}</h3></a>
            </Link>
            <p><span>Date:</span> {day}</p>
            <p><span>Date:</span> {time}</p>

            <span className="news">Category: </span>
            <Link as={`/news/${category}`} href={`/category?id=${category}`}>
              <a className="category">{category}</a>
            </Link>

          </div>
          <hr />
        </div>
      ))}
    </div>
    <Rightbar>
      {props.list.map(({ category }) => (
        <Link as={`/news/${category}`} href={`/category?id=${category}`}><a className="list" key={category}>{category} </a></Link>
      ))}
    </Rightbar>

    <style jsx>{`

h1{
    color: rgb(199, 50, 50);
}

div.content{
    overflow: auto;
    margin-top:3%;
    width: 50%;
    display: inline-block;
    float: left;
    margin-left: 5%;
    padding: 2%;
    margin-bottom: 1%;
}
div.news{
  vertical-align: middle;
}

div.info{
    display: inline-block;
    width: 70%;
    text-align: justify;
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
  a.title {
    text-decoration: none;
    color: rgba(5, 132, 163, 0.829);
  }
  

  a.title:hover {
    text-decoration: underline;
  }
  a.list{
    display: inline-block;
    padding: 1%;
    background: rgb(223, 219, 219);
    border-radius:10px; 
    margin-left: 1%;
    margin-bottom: 1%;
    color: rgb(35, 107, 62);
    text-decoration: none;
  }
  a.list:hover{
    background-color: rgb(53, 51, 51);
    color: rgb(13, 172, 13);
  }
  a.category{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.829);
  }

  a.category:hover {
    text-decoration: underline;
  }
  span{
    font-weight: bold;
  }
`}</style>

  </Blayout>
)

Language.getInitialProps = async function (context) {
  const id = context.query.id;
  const res = await fetch(`http://localhost:8080/news/lang/${id}`)
  const data = await res.json()

  const res2 = await fetch('http://localhost:8080/category')
  const data2 = await res2.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    list: data2,
    news: data
  }
}

export default Language