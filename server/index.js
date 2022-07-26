const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  '/', 
  (req,res) => {
    res.send('Hello From Server!!!')
  }
);

app.listen(port, console.log(`Server running on port ${port}`.green.underline.bold));