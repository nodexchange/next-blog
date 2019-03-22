import { Layout } from "../components"
import { TodoList, MainPage } from "../containers"
import fetch from "isomorphic-unfetch"

const Post = props => (
  <Layout selectedClass={'details'} >
      <MainPage {...props} selectedClass={'details'} />
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[\/]?p>/g, "")}</p>
      <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
