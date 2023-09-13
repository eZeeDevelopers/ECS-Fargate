const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const port = process.env.NODE_LOCAL_PORT || 3000;
const routes = require('./route');
app.use(routes)
//Start Server
const server = app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})