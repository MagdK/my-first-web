const port = 9001;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// PATHS
const pathToFrontend = path.join(__dirname, '../frontend');
const pathToIndex = path.join(pathToFrontend, 'index.html');
const pathToPub = path.join(pathToFrontend, 'public');
const pathToData = path.join(pathToPub, 'data');
const pathToUserJson = path.join(pathToData, 'data.json');

// USE
app.use('/pub', express.static(pathToPub));


// GET REQUESTS
app.get('/', (req, res) => {
    res.sendFile(pathToIndex)
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})