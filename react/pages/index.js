import Blayout from '../components/basic_layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Blayout>
    
    <div className="content">
    <h1>News</h1>
        {/* loop for each news */}
        {props.news.map(({ title, link, date,time, id, category, image }) => (
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
              <p><span>Date:</span> {date}</p>
              <p><span>Time:</span> {time}</p>

              <span>Category: </span>
              <Link as={`/news/${category}`} href={`/category?id=${category}`}>
                <a className="category">{category}</a>
              </Link>

            </div>
            <hr />
          </div>
        ))}
</div>
<style jsx>{`

    h1{
        color: rgb(199, 50, 50);
    }

    div.news{
      vertical-align: middle;
    }

    div.content{
        overflow: auto;
        margin-top:3%;
        width: 50%;
        float: left;
        margin-left: 5%;
        padding: 2%;
        border: 1px solid black;
        border-radius: 10px;
        font-family: 'Times New Roman';
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
      a.category{
        text-decoration: none;
        color: rgba(0, 0, 0, 0.829);
      }

      a:hover {
        text-decoration: underline;
      }
      span{
        font-weight: bold;
      }
`}</style>
  </Blayout>
)

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:8080/news')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      news: data
    }
  }



export default Index