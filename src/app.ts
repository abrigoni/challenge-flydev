import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/schema';


const app = express();


// middlewares
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
}));


export default app;