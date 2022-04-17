const port = 9002;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const pathToFrontend = path.join(__dirname, '../frontend');
const pathToPublic = path.join(pathToFrontend, 'public');
const pathToData = path.join(pathToPublic, 'data');
const pathToUsers = path.join(pathToData, 'users.json');

app.use('/pub', express.static(pathToPublic));

app.get('/', (req, res) => {
    res.sendFile(path.join(pathToFrontend, 'index.html'));
});

// Users.json file
app.get('/users', (req, res) => {
    res.sendFile(pathToUsers);
});


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});