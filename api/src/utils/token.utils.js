

const createToken = auth => {
    return jwt.sign({
            id: auth.id
        }, 'my-secret',
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
  generateToken: (req, res, next) => {
      req.token = createToken(req.auth);
      return next();
  },
  sendToken: (req, res) => {
      res.setHeader('x-auth-token', req.token);
      return res.status(200).send(JSON.stringify(req.user));
  }
};