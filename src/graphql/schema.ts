import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull } from 'graphql';
import _ from 'lodash';
import { UserType } from './types';
import { User } from '../models';


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        users: {
            type: GraphQLList(UserType),
            async resolve (parent, args) {
                let users = await User.find({});
                return _.sortBy(users, "lastName", 'asc');
            }
        },
        user: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(_, args) {
                return User.findById(args._id);
            }
        }
    })
});


const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: () => ({
        createUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) } ,
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(_, args) {
                const { name, lastName, age } = args;
                let user = new User({name, lastName, age});
                return user.save();
            }
        },
        updateUser: {
            type: UserType,
            args: { 
                _id!: { type: new GraphQLNonNull(GraphQLID),  },
                name: { type: GraphQLString },
                lastName: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const filter = { _id: args._id };
                // creating the partial object to update only the values that were given in the arguments' mutation
                const update = _.clone(args);
            
                return User.findOneAndUpdate(filter, update, {new: true});
            }
        }
    })
});


export default new GraphQLSchema({
    query: Query,
    mutation: Mutation
});