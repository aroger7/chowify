const { User } = require('./../models/user');

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');
  console.log(`Attempting to authenticate token ${token}`);

  User.findByToken(token)
    .then(user => {
      if (!user) {
        console.log(`Unable to authenticate token ${token}`);
        return Promise.reject();
      }

      console.log(`Authenticated token as user ${user._id}, ${user.userName}`);
      req.user = user;
      req.token = token;
      next();
    })
    .catch(err => res.status(401).send());
};

module.exports = {
  authenticate
};
