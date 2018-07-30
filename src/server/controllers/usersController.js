const { User } = require('../models/user');

exports.usersPost = (req, res) => {
  const user = new User({
    userName: req.body.userName,
    password: req.body.password
  });
  user
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(e => {
      console.log('Unable to add user', e);
      res.status(400).send();
    });
};

exports.usersLoginPost = (req, res) => {
  User.findByCredentials(req.body.userName, req.body.password)
    .then(user => {
      user.generateAuthToken().then(token => {
        res.header('x-auth', token).send(user);
      });
    })
    .catch(err => res.status(400).send());
};

exports.usersCurrentGet = (req, res) => {
  res.send(req.user);
};

exports.usersCurrentTokenDelete = (req, res) => {
  req.user
    .removeToken(req.token)
    .then(() => {
      res.status(200).send();
    })
    .catch(e => {
      res.status(404).send();
    });
};
