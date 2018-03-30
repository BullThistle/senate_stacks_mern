var express = require('express');
var app = express();
var router = express.Router();
const request = require('request');
const apiKey = process.env.OPEN_SECRETS_API;

//Schema
var TopicList = require('../models/TopicList');

// Get All Items
router.route('/').get(function (req, res) {
  TopicList.find(function (err, items){
    if(err){
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Add item
router.route('/add').post(function (req, res) {
  var item = new TopicList(req.body);
      item.save()
    .then(item => {
    res.json('Added');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//  Update Specific
router.route('/update/:id').post(function (req, res) {
  TopicList.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.desc = req.body.desc;

      item.save().then(item => {
          res.json('Updated');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Delete Specific
router.route('/delete/:id').get(function (req, res) {
  TopicList.findByIdAndRemove({_id: req.params.id},
       function(err, item){
        if(err) res.json(err);
        else res.json('Deleted');
    });
});

//Legislator information endpoint
router.route('/legislator/:cid').get(function (req, res) {
  var cid = req.params.cid;
   
  var candUrl = `http://www.opensecrets.org/api/?method=candSummary&cid=${cid}&cycle=2018&apikey=${apiKey}&output=json`;
  
  request(candUrl, function (err, response, body) {
    if (body === 'Resource not found') {
      res.send({status: 'Network error'})
      console.log('Api for legislator is not working');
    }
   if(err){
     console.log('Hit error');
   } else {
     var cand = JSON.parse(body);

     if(cand.response == undefined){
       console.log('legislators.response is undefined');
     } else {
       console.log(cand);
       res.json(cand);
     }
   }
  });
});
 
 //Contributor information endpoint
 router.route('/legislativeContributor/:cid').get(function (req, res) {
   var cid = req.params.cid;
   
   var contribUrl =
    `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&cycle=2018&apikey=${apiKey}&output=json`;

    request(contribUrl, function (err, response, body) {
      if (body === 'Resource not found') {
        res.send({status: 'Network error'})
        console.log('Api for legislative contributor is not working');
      }
      if(err){
        console.log('Hit error');
      } else {
        var contribs = JSON.parse(body);
        
        if(contribs.response == undefined){
          console.log('legislators.response is undefined');
        } else {
          console.log(contribs);
          res.json(contribs);
        }
      }
    });
  });

router.route('/:state').get(function (req, res) {
  var state = req.params.state;
  var url = `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${apiKey}&output=json`;

  request(url, function (err, response, body) {
    if (body === 'Resource not found') {
      res.send({status: 'Network error'})
    } else {
      if(err){
        res.render('index', {legislators: null, error: 'Error, please try again'});
      } else {
        var legislators = JSON.parse(body);
        if(legislators.response == undefined){
          res.render('index', {legislators: null, error: 'Error, please try again'});
        } else {
          res.json(legislators);
        }
      }
    }
  });
});


module.exports = router;
