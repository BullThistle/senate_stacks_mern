var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var Topic = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Comments'
});

module.exports = mongoose.model('TodoList', Topic);