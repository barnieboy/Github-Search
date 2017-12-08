//import bookshelf from '../bookshelf';
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Sc

const userSchema = new Schema({
  email: { type: String},
  password: { type: String}
});
module.exports = mongoose.model('User', userSchema);

// export default bookshelf.Model.extend({
//   tableName: 'users'
// });
