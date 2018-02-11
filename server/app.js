/*
app.get('/', (req, res) => {
    res.send('Hello World!');
});
*/

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/todos', (req, res) => {
    db.getTodos().then(data => res.send(data));
});

app.post('/todos', (req, res) => {
    db.createTodo(req.body).then(data => res.send(data));
});

app.delete('/todos/:id', (req, res) => {
    db.deleteTodo(req.params.id).then(data => res.send(data));
});

app.get('/categories', (req, res) => {
    db.getTodos().then(data => res.send(data));
});

app.post('/categories', (req, res) => {
    db.createTodo(req.body).then(data => res.send(data));
});

app.delete('/categories/:id', (req, res) => {
    db.deleteTodo(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});