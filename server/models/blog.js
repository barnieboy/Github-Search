const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose


// Blog Model Definition
const blogSchema = new Schema({
  title: { type: String },
  body: { type: String},
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  user:{ type: Schema.Types.ObjectId, ref: 'users'}

  // comments: [{
  //   comment: { type: String, validate: commentValidators },
  //   commentator: { type: String }
  // }]
  

},{timestamps :true});

// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);
