const express = require('express');
const app =express();
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

const cors = require('cors');

dbConnect();

app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`);
});