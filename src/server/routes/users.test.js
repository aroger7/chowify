const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('../app');
const mongoose = require('mongoose');
const { User } = require('../models/user');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

beforeEach(async () => {
  await User.remove({}).exec();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    const userName = 'test-user';
    const password = 'abc123';
    const res = await request(app)
      .post('/users')
      .send({ userName, password })
      .expect(200);
    expect(res.body._id).toBeTruthy();
    expect(res.body.userName).toBe(userName);

    const user = await User.findOne({ userName }).exec();
    expect(user).toBeTruthy();
    expect(user.userName).toBe(userName);
    expect(user.password).not.toBe(password);
  });

  it('should not create a new user with an existing username', async () => {
    const userName = 'test-user';
    const password = 'abc123';
    const res = await request(app)
      .post('/users')
      .send({ userName, password })
      .expect(200);
    await request(app)
      .post('/users')
      .send({ userName, password })
      .expect(400);

    const users = await User.find({ userName }).exec();
    expect(users.length).toBe(1);
  });
});
