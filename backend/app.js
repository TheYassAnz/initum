// import express
const express = require('express');

// create an express app
const app = express();

const dotenv = require('dotenv');
const p = dotenv.config().parsed;

// nodemailer
const nodemailer = require('nodemailer');

// axios
const axios = require('axios');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: p.TRANSPORT_MAIL,
        pass: p.TRANSPORT_PASSWORD,
    },
});

// Middleware which intercept JSON data
app.use(express.json());

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

// simple middleware
app.post('/api/mail/send', (req, res) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        project,
        message,
        captchaToken,
    } = req.body;
    try {
        axios
            .post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${p.RECAPTCHA_SERVER_KEY}&response=${captchaToken}`
            )
            .then((response) => {
                if (!response.data.success) {
                    res.status(500).json({ message: 'Invalid Captcha' });
                } else {
                    transporter.sendMail(
                        {
                            to: 'yassanz.webmaster@gmail.com',
                            subject: `Nouveau message de ${firstname} ${lastname} - ${project}`,
                            text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nProjet: ${project}\nMessage: ${message}`,
                        },
                        function (error, info) {
                            if (error) {
                                res.status(500).json({ message: error });
                            } else {
                                res.status(200).json({
                                    message: `Message envoyé avec succès!`,
                                });
                            }
                        }
                    );
                }
            })
            .catch((error) => {
                res.status(500).json({ message: error });
            });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// export the express app
module.exports = app;
