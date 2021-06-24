const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// DB TEST 

const db = require('./config/database');
db.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));

app.use('/', require('./routes/routes'));

const PORT= process.env.PORT || 8080; 

db.sync()
    .then(() => {
        app.listen(PORT, console.log(`Server on ${PORT}`));
    })
    .catch(err => {console.log('Error: ' + err);});