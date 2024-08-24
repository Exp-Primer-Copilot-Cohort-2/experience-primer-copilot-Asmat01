//create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
//create database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
//set default data
db.defaults({ comments: [] }).write();
//create route
app.get('/comments', (req, res) => {
    res.send(db.get('comments').value());
});
app.post('/comments', (req, res) => {
    const newComment = req.body;
    db.get('comments').push(newComment).write();
    res.send(newComment);
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
//run server
//node comment.js
//test
//curl -X POST -H "Content-Type: application/json" -d '{"content":"Hello"}' http://localhost:3000/comments
//curl http://localhost:3000/comments
//output: [{"content":"Hello"}] 
 2.2.2. Create a client to interact with the server