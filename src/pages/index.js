import { Layout, MainPage } from '../components'

import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
      <MainPage {...props} />
    </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/_data/test')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index