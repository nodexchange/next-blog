import { Layout, MainPage } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { startClock } from '../redux/store'

// import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <MainPage {...this.props} />
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startClock: bindActionCreators(startClock, dispatch)
  }
}

// Index.getInitialProps = async function() {
//   const res = await fetch('http://localhost:3000/_data/shows')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }
// export default Index

export default connect(
  null,
  mapDispatchToProps
)(Index)