import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import { HelloWorld, Shows } from '../../components'

import style from './MainPage.scss'

import gql from "graphql-tag";
import { Query } from "react-apollo";

const SHOWS_QUERY = gql
`
  query ShowsQuery {
    shows {
      score
      show {
        id
        name
      }
    }
  }
`

const MainPage = (props) => {
  return (
    <div>
      <h1 id={style.main}>Batman TV Shows</h1>
      <div id="main">
        {props.title}
      </div>
      <Query query={SHOWS_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <p>Loading...</p>
              }
              if (error) {
                console.log('apollo data fetch error', error);
              }
              // console.log(data)
              return <Fragment>
                <Shows {...data} />
              </Fragment>
            } 
          }
        </Query>
      <HelloWorld />
    </div>
  )
}

export default MainPage
