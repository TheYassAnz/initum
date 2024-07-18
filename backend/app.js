const express = require('express');
const app = express();
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const axios = require('axios');
const mongoose = require('mongoose');

// Load environment variables
const p = dotenv.config().parsed;

// Middleware which intercept JSON data
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(p.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Connection to MongoDB failed: ' + error);
    });

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello World! Welcome to the Initum API!',
        authors: [
            {
                name: 'Yassine ANZAR BASHA',
                email: 'yassanz.contact@gmail.com',
                linkedin: 'https://www.linkedin.com/in/yanzarbasha/',
            },
            {
                name: 'Abubakar ALIEV',
                email: 'alievabubakar@mail.com',
                linkedin: 'https://www.linkedin.com/in/alieva/',
            },
        ],
    });
});

const mailRoutes = require('./routes/mail');

app.use('/api/mail', mailRoutes);

// export the express app
module.exports = app;
