var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var TopicList = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Tasks'
});

module.exports = mongoose.model('TopicList', TopicList);
