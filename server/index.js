import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import blog from './routes/blog';
import github from './routes/github'


let app = express();
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mern');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api/users', users); //register route
app.use('/api/auth', auth); //Login route
app.use('/api/blog', blog); //Login route
app.use('/api/github', github); //Login route

const compiler = webpack(webpackConfig);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function() {
    console.log("Database conencted successfully!");
});
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
