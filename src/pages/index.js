import { Layout, HelloWorld } from '../components'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
      <h1>Batman TV Shows</h1>
      <div id="main">
        {props.title}
      </div>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
            <HelloWorld />
          </li>
        ))}
      </ul>
    </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index