const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./../schemas/schema');

class GraphQL {
  constructor(app) {
    this.app = app
    app.use(cors());
    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true
      })
    )
  }
}

module.exports = GraphQL
