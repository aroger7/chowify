const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const config = require('../config/config');
const { User } = require('./user');

const userId = new ObjectID();
const user = {
  _id: userId,
  userName: 'userModelExample',
  password: 'abc123',
  tokens: [
    {
      access: 'auth',
      token: jwt.sign({ _id: userId, access: 'auth' }, process.env.JWT_SECRET)
    }
  ]
};

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

beforeEach(async () => {
  await User.remove({ _id: user._id }).exec();
  await new User(user).save();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('User Model', () => {
  it('should not allow a username under the min length', async () => {
    await expect(
      User.findByIdAndUpdate(user._id, { userName: { $set: '1234' } })
    ).rejects.toThrow();
  });

  it('should not save a password as plain text', async () => {
    const doc = await User.findById(user._id);
    expect(doc).toBeTruthy();
    expect(doc.userName).toBe(user.userName);
    expect(doc.password).not.toBe(user.password);
  });

  it('should resolve when comparing correct passwords', async () => {
    const doc = await User.findById(user._id);
    expect(doc).toBeTruthy();
    await expect(doc.comparePassword(user.password)).resolves.toBeTruthy();
  });

  it('should reject when comparing incorrect passwords', async () => {
    const doc = await User.findById(user._id);
    expect(doc).toBeTruthy();
    await expect(doc.comparePassword('blah')).rejects.toBeUndefined();
  });

  it('should find a user by their credentials', async () => {
    const doc = await User.findByCredentials(user.userName, user.password);
    expect(doc).toBeTruthy();
    expect(doc.userName).toBe(user.userName);
  });

  it('should find a user with a valid auth token', async () => {
    const doc = await User.findByToken(user.tokens[0].token);
    expect(doc).toBeTruthy();
    expect(doc.userName).toBe(user.userName);
    expect(doc.tokens[0].token).toBe(user.tokens[0].token);
  });

  it('should remove an auth token', async () => {
    let doc = await User.findById(userId);
    expect(doc).toBeTruthy();
    expect(doc.tokens.length).toBe(1);
    await doc.removeToken(user.tokens[0].token).exec();
    doc = await User.findById(userId);
    expect(doc.tokens.length).toBe(0);
  });

  it('should generate an auth token with the jwt secret', async () => {
    let doc = await User.findById(userId);
    expect(doc).toBeTruthy();
    expect(doc.tokens.length).toBe(1);
    const token = await doc.generateAuthToken();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded).toMatchObject({
      _id: userId.toHexString(),
      access: 'auth'
    });
    doc = await User.findById(userId);
    expect(doc.tokens.length).toBe(2);
    expect(doc.tokens[1].token).toEqual(token);
  });
});
