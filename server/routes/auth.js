import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

//login Route
router.post('/', (req, res) => {
User.findOne({"email":req.body.identifier},function(err,user){
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({
          id: user._id,
          email: user.email
        }, config.jwtSecret);
        res.json({ token, data:user });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

export default router;
