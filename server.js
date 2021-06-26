const express = require("express"); // import express from "express"

const app = express();


app.get('/', (req, res) => {
    res.send('Shalom Everyone!')
});

app.get('/node', (req, res) => {
    res.send('<h1 style="color:blue; background-color:green;"> Working on the backend with Node.js is cool</h1>');
});

app.get('/codeyourfuture', (req, res) => {
    res.send({
        cyf : "cyf is super cool",
        score: 8
    })
});

app.listen(3000, () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
