const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()


//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'cbawebdesign1@gmail.com',
        pass: 'Allday247!!!!'
    }
});


exports.sendEmail = functions.firestore
    .document('posts/{postId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `cbawebdesign1@gmail.com`,
            to: snap.data().users,

            subject: 'DAlpha LP Dashboard Test',
            html: `<h1>Digital Alpha Limited Partner Dashboard</h1>
                                <p>
                                <p>You have new documents available(TEST)</p>
                                </p>`
        };



        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });