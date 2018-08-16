const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

describe('User Model', () => {
  describe('Validation', () => {
    it('should allow a username larger than the min length', async () => {
      const user = new User({ userName: 'test-user', password: 'abc123' });
      await expect(user.validate()).resolves.toBeFalsy();
    });

    it('should not allow a username shorter the min length', async () => {
      const user = new User({ userName: '1', password: 'abc123' });
      await expect(user.validate()).rejects.toBeTruthy();
    });

    it('should allow a password larger than the min length', async () => {
      const user = new User({ userName: 'test-user', password: 'abc123' });
      await expect(user.validate()).resolves.toBeFalsy();
    });

    it('should not allow a password shorter than the min length', async () => {
      const user = new User({ userName: 'test-user', password: '1' });
      await expect(user.validate()).rejects.toBeTruthy();
    });

    it('should require a username', async () => {
      const user = new User({ password: 'abc123' });
      await expect(user.validate()).rejects.toBeTruthy();
    });

    it('should require a password', async () => {
      const user = new User({ userName: 'test-user' });
      await expect(user.validate()).rejects.toBeTruthy();
    });
  });

  describe('Instance Methods', () => {
    it('should call bcrypt compare when comparing passwords', async () => {
      const user = new User({ userName: 'test-user', password: 'abc123' });
      bcrypt.compare = jest.fn();
      user.comparePassword('abc123');
      expect(bcrypt.compare).toHaveBeenCalledTimes(1);
      expect(bcrypt.compare).toHaveBeenCalledWith(
        user.password,
        user.password,
        expect.any(Function)
      );
    });

    it('should return the user document on successful password comparison', async () => {
      const user = new User({ userName: 'test-user', password: 'abc123' });
      bcrypt.compare = jest.fn((a, b, cb) => cb(null, true));
      await expect(user.comparePassword('abc123')).resolves.toEqual(user);
    });

    it('should reject on password comparison fail', async () => {
      const user = new User({ userName: 'test-user', password: 'abc123' });
      bcrypt.compare = jest.fn((a, b, cb) => cb('error', null));
      await expect(user.comparePassword('1')).rejects.toBeUndefined();
    });
  });
});
