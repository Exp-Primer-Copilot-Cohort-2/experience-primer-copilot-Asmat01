// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comment', (req, res) => {
    res.send('Comment created');
});

// Read a comment
app.get('/comment/:id', (req, res) => {
    res.send('Comment read');
});

// Update a comment
app.put('/comment/:id', (req, res) => {
    res.send('Comment updated');
});

// Delete a comment
app.delete('/comment/:id', (req, res) => {
    res.send('Comment deleted');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
}); 
 /*The above code creates a simple web server that listens on port 3000. It has four endpoints: 
 
 POST /comment  - Creates a comment 
 GET /comment/:id  - Reads a comment 
 PUT /comment/:id  - Updates a comment 
 DELETE /comment/:id  - Deletes a comment 
 
 To run the code, save it in a file named  comment.js  and execute it using Node.js. 
 $ node comment.js
Server started at http://localhost:3000 
 Now the server is running. You can test the endpoints using a web browser or a tool like Postman. 
 Conclusion 
 In this article, you learned about the different HTTP methods and how they are used in RESTful APIs. You also learned how to create a simple web server in Node.js to handle requests using the four CRUD operations. 
 To learn more about RESTful APIs, check out the  RESTful API tutorial. 
 A Tech Enthusiast, Blogger, Linux Fan and a Software Developer. Writes about Computer hardware, Linux and Open Source software and coding in Python, Php and Javascript. He can be reached at  [email protected].