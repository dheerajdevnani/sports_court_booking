const express = require('express');

const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
app.use(bodyParser.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
