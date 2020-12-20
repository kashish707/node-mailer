let nodemailer = require('nodemailer');
let myEmail = 'user@gmail.com';
let transport = nodemailer.createTransport({
    service: 'gmail',
    auth:
    {
        user: myEmail,
        pass: 'user_pwd'
    }
});
let message = {
    from: myEmail,
    to: 'to@gmail.com',
    subject: 'Message sent from nodemailer',
    text: 'hey its kashish',
    attachments: [
        {
        path:'./files/celebal1.jpeg'
        }
    ]
};
transport.sendMail(message, function (err) {
    if (err) {
        console.log("Failed to send Email.\n");
        return;
    }
    console.log("Email sent.\n");
})