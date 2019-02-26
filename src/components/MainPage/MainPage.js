import React from 'react'
import Link from 'next/link'
import { HelloWorld } from '../../components'

const MainPage = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default MainPage
