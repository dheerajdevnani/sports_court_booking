const express = require('express');
const mongoose = require('mongoose');


// dotenv.config();

const app = express();
app.use(bodyParser.json());




const PORT =  5000;
app.listen( () => console.log(`Server running on port ${PORT}`));
