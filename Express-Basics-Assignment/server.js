const express = require('express');
const app = express();

const PORT = 7777;

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
})

app.get("/about", (req, res) => {
    res.send("This is About Page");
})

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
})

app.get("/user/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
})
