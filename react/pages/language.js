import Blayout from '../components/basic_layout'
import Rightbar from '../components/rightbar'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Language = (props) => (
  <Blayout >
    <div className="col-sm-9">
      <div className="container" >
      <h4 className="head text-info">Language Code: <span className="lead text-uppercase">{props.head}</span></h4>
      {/* loop for each news */}
      {props.news.map(({ title, link, day, time, id, image,category }) => (
        <div className="news" className="row card mb-2" key={id}>
        <Link href={`${link}`}>
          <a><img className="card-img-top w-100 mh-100" src={image} alt="Card image" /></a>
        </Link>
        <div className="card-body">
          <Link href={`${link}`}>
            <a><h4 className="card-title info">{title}</h4></a>
          </Link>
          <div className="row">
            <div className="col-sm">
              <span>Category: </span>
              <Link as={`/news/${category}`} href={`/category?id=${category}`}>
                <a className="card-text info">{category}</a>
              </Link>
            </div>
            <br />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="card-text">{day}</p>
            </div>
            
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
    <Rightbar>
    {props.list.map(({ category }) => (
          <Link as={`/news/${category}`} href={`/category?id=${category}`}>
            <a className="rightbar nav-link" key={category}>{category} </a>
          </Link>
        ))}
    </Rightbar>

    <style jsx>{`
      a.rightbar{
        color: green;
      }
      
    `}</style>

  </Blayout>
)

Language.getInitialProps = async function (context) {
  const id = context.query.id;
  const res = await fetch(`http://localhost:8080/news/lang/${id}`)
  const data = await res.json()

  const res2 = await fetch(`http://localhost:8080/category/${id}`)
  const data2 = await res2.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    list: data2,
    news: data,
    head:id
  }
}

export default Language