const express = require('express');
const app = express();
const path = require('path');
const tuneController = require('./controllers/tuneController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//DB connection


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/index.html')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});
app.get('/create', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/create/new', 
  tuneController.createTune, 
  (req, res) => {
    return res.status(200).json();
  });

app.get('/gettunes', 
  tuneController.getTunes, 
  (req, res) => {
    return res.status(200).json();
  });

app.delete('/remove', 
  tuneController.removeTune, 
  tuneController.getTunes,
  (req, res) => {
    return res.status(200).json();
  }  );










app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});


app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});


app.listen(3000); //listens on port 3000 -> http://localhost:3000/