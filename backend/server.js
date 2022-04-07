const express = require('express');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const path = require('path');
const port = 9000;
const app = express();


const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.get('/', (req, res) => { 
    res.sendFile(path.join(`${pathToFrontend}/index.html`));
});

app.use('/pub', express.static(`${pathToFrontend}/pub`));

app.use('/json', express.static(`${pathToFrontend}/json`));


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});