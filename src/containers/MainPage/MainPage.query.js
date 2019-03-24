import gql from "graphql-tag";

const SHOWS_QUERY = gql
`
  query ShowsQuery($limit: Int, $offset: Int)   {
    shows(limit: $limit, offset: $offset) {
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

export default SHOWS_QUERY