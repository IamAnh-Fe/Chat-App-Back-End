const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database/db');
const bodyparser = require('body-parser');

//conect database
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));