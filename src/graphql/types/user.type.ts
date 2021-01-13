import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

export default UserType;