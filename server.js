const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, "public/dist/public")));

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.listen(1337);