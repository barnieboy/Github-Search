import Blog from '../models/blog';
import express from 'express';
import authenticate from '../middlewares/authenticate';
var request = require('request');

let router = express.Router();


//get users based on search text
router.post('/searchUser', (req, res) => {
    console.log("inside get user");
console.log(req.body);
	


    var searchText=req.body.searchText
    var url = 'https://api.github.com/search/users?q=' + searchText;

    const options = {
        url: url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };

    request(options, function (err, response, body) {
        var data=JSON.parse(body)
        console.log(data);
        res.json(data);
    });

});
/* =


==============================================================
     get user detail
  =============================================================== */
router.get('/getUserDetail/:userId', (req, res) => {
    //userId will be login field in the /getUser api
    var userId = req.params.userId;
    const url = 'https://api.github.com/users/'+userId;
    const options = {
        url: url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client'
        }
    };

    request(options, function (err, response, body) {
        var data=JSON.parse(body)
        res.json(data);
    });

});

export default router;
