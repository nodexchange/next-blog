import { Layout, MainPage } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { startClock } from '../redux/store'
import { AddTodo, TodoList } from '../containers';

// import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    return { isServer }
  }

  componentDidMount () {
    const { dispatch } = this.props
    // console.log('>>> DID MOUNT <<<<')
    // console.log(dispatch)
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    // const { dispatch } = this.props
    // console.log('>>> RENDER MOUNT <<<<')
    // console.log(dispatch)
    return (
      <Layout>
        <AddTodo />
        <TodoList />
        <MainPage {...this.props } />
      </Layout>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startClock: () => {
//       console.log('START CLOCK')
//     }
//   }
// }

const mapDispatchToProps = () => {}
const mapStateToProps = () => {}

// Index.getInitialProps = async function() {
//   const res = await fetch('http://localhost:3000/_data/shows')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }
// export default Index

export default connect()(Index)