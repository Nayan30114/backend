import cron from 'node-cron';
import nodemailer from 'nodemailer';

console.log(nodemailer)

cron.schedule("1-2 * * * * *", function () {
//                    Authorisation
let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nayans3011@gmail.com",
        pass: "amhotomveptlkcgm"     //**//
    }
});
//                    Mail Option
let option = {
    from: "nayans3011@gmail.com",
    // to: "anupam25rai11@gmail.com",
    to: req.body.email,
    subject: "Full Stack Develipment",
    text: "This mail sent from NodeJS"
};
//                    Send Mail
transport.sendMail(option, function(err, info) {
    if (err) {
        console.log("Failed to sent Mail.....", err)
    }
    else console.log("Successfully Sent")
})
});