import React from 'react'
import Link from 'next/link'

const Shows = (props) => {
  return (
    <div>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shows
