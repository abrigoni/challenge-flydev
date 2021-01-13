import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import User from '../models/user.model';

const mongoDBURL = "mongodb://localhost:27017/test_challenge_flydevs";

const request = supertest(app);

describe('User MongoDB tests', () => {

    beforeAll(async () => {
        await mongoose.connect(mongoDBURL, {useNewUrlParser:true});
        await User.remove({}); // deletes all users in test database
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should insert a new document into users collection', async () => {

        const mockUserData = { name: 'John', lastName: "Doe", age: "23" };
        await User.create(mockUserData);

        const insertedUser = await User.findOne({ name: 'John', lastName: "Doe" });
        expect(insertedUser).toBeInstanceOf(User);
    });

    it('should fail to insert a new document into users collection', async () => {
        const mockUserData: any = [];
        const user = await User.create(mockUserData);
        expect(user).not.toBeInstanceOf(User);
    });


    it('should get all users collection', async () => {
        const users = await User.find({});
        expect(users.length).toBeGreaterThanOrEqual(0);
    });

})


describe('GraphQL API Tests', () => {

    beforeAll(async () => {
        await mongoose.connect(mongoDBURL, {useNewUrlParser:true});
        await User.remove({}); // deletes all users in test database
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should get all users thorugh graphql api', async (done) => {
        request.post("/graphql")
        .send({
            query: "{ users { _id, name, lastName, age} }"
        }).set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
            if (err) return done(err)
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.data.users.length).toBeGreaterThanOrEqual(0);
            done();
        })
    });


    it('should insert a user through graphql api', async (done) => {
        request.post('/graphql')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
            query: "mutation {createUser(name: \"Juan\" lastName: \"Perez\", age: 25 ) { name, lastName, age } }"
        }).expect(200)
        .end(function (err, res) {
            if (err) return done(err)
            expect(res.body).toBeInstanceOf(Object);
            done();
        })
    });


    it('should fail to create user through graphql api', async (done) => {
        request.post('/graphql')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({
            query: "mutation {createUser(name: \"categorized\") { name }"
        }).expect(400)
        .end(function (err, res) {
            if (err) return done(err)
            expect(res.body).toBeInstanceOf(Object);
            done();
        })
    });
})

