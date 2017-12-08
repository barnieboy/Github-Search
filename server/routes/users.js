import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
import User from '../models/user';

let router = express.Router();


router.get('/:identifier', (req, res) => {
 User.findOne({"email": req.params.identifier},function(err,user){
    if(err){
      res.json({code:403,message:"failed",data:err});
    }else{
       res.json({ user });
    }  
  });
});

//register route
router.post('/', (req, res) => {
  User.findOne({"email":req.body.email},function(err,user){
    if (user) {
      res.json({ success: true,message:"user already exist" });
    }else{
      const password_digest = bcrypt.hashSync(req.body.password, 10);
      var model = new User();
      model.email = req.body.email;
      model.password = password_digest;
      model.save(function(err,userData){
        if(err){
          res.status(500).json({ error: err });
        }else{
           res.json({ success: true });     
        }
      })
    }
  })
});

export default router;
