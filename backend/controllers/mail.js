const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const axios = require('axios');

// Load environment variables
const p = dotenv.config().parsed;

// Create a transporter object
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: p.TRANSPORT_MAIL,
        pass: p.TRANSPORT_PASSWORD,
    },
});

exports.postMessage = (req, res) => {
    const isAnyFieldEmpty = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'project',
        'message',
        'captchaToken',
    ].some((field) => !req.body[field] || req.body[field].trim() === '');
    if (isAnyFieldEmpty) {
        return res
            .status(400)
            .json({ message: 'Veuillez remplir tous les champs!' });
    }
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
                    res.status(500).json({ message: 'Invalid Captcha!' });
                } else {
                    transporter.sendMail(
                        {
                            to: 'initum.contact@gmail.com',
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
                res.status(500).json({
                    message: 'Verification du Captcha invalide!',
                    error,
                });
            });
    } catch (error) {
        res.status(500).json({
            message: 'Le serveur rencontre un problème!',
            error,
        });
    }
};
