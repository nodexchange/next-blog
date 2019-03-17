import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import { Shows } from '../../components'
import { TimelineLoaded } from '../../components'

import style from './MainPage.scss'

import gql from "graphql-tag";
import { Query } from "react-apollo";

const SHOWS_QUERY = gql
`
  query ShowsQuery {
    shows {
      show {
        id
        name
        language
        type
        premiered
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
                <TimelineLoaded events={data.shows} />
                <Shows {...data} />
              </Fragment>
            } 
          }
        </Query>
      {/* <TodoList todos={ [ { id:0, completed:true, text:'text1' }, { id:0, completed:false, text:'text2' } ] } onTodoClick={ () => { console.log('CLICK') }} /> */}
    </div>
  )
}

export default MainPage
