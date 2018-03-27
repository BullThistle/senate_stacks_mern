var express = require('express');
var app = express();
var router = express.Router();
const request = require('request');

//Schema
var TopicList = require('../models/TopicList');

// Get All Items
router.route('/').get(function (req, res) {
  console.log('Def Hits Right Here');
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

router.route('/:state').get(function (req, res) {
  var state = req.params.state;
  var apiKey = process.env.OPEN_SECRETS_API;
  var url = `http://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${apiKey}&output=json`;

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {legislators: null, error: 'Error, please try again'});
    } else {
      var legislators = JSON.parse(body)
      if(legislators.response == undefined){
        res.render('index', {legislators: null, error: 'Error, please try again'});
      } else {
        res.json(legislators);
      }
    }
  });
});

module.exports = router;
