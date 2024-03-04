const express=require('express');
const cors = require("cors");
const nodemailer=require('nodemailer');
require('dotenv').config();
const bodyparser = require('body-parser');
const app=express();
const PORT=process.env.PORT
require('./models')
const userController=require('./controllers/userController');
const eventController=require('./controllers/eventController');
const volunteerControler=require('./controllers/volunteerControler');
const donateController=require('./controllers/donateController');
//middleware
app.use(cors());
app.use(express.json({limit:"300mb"}));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('/Images'));
//user apis
app.post('/adduser',userController.addUser);
app.get('/allusers',userController.getAllUsers);
app.post('/users',userController.getOneUser);
app.get('/users/:id',userController.getOneUserbyId);
app.put('/updateusers/:id',userController.updateUser);
app.delete('/deleteusers/:id',userController.deleteUser);

// static images folder
app.use('/Images',express.static('./Images'))
//event apis
app.post('/events/addevent',eventController.uploadimage, eventController.addEvent);
app.get('/events/allevents',eventController.getAllEvents);
app.get('/events/getoneevent/:id',eventController.getOneEvent);
app.put('/events/update/:id',eventController.uploadimage,eventController.updateEvent);
app.delete('/events/delete/:id',eventController.deleteEvent);

//donate apis
app.post('/donate',donateController.paymentInit);
app.post('/donate/success',donateController.storeDonateDB);
app.get('/getdontiondetails',donateController.getDonationDetails)
app.get('/getonedonation/:email',donateController.getOneDonations)
//volunters apis
app.post('/volunteer/add',volunteerControler.addVolunter);
app.get('/volunteer/getAllVolunteers',volunteerControler.getAllVolunteers);
app.put('/volunteer/editVolunteer/:id',volunteerControler.editVolunteer);
app.get('/volunteer/getVolunteer/:id',volunteerControler.getVolunteer);
app.get('/volunteer/getVolunteerbycat',volunteerControler.getVolunteerbyCat);
app.get('/volunteer/getoneuserevents/:email',volunteerControler.getOneUserEvents);
app.delete('/volunteer/deleteVolunteer/:id',volunteerControler.deleteVolunteer);


//mail to users

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     port:465,
//     secure:true,
//     logger:true,
//     debug:true,
//     secureConnection:false,
//     auth: {
//       user: 'manishreddy1177@gmail.com',
//       pass: 'ftpx zqwr kjrf sbek'
//     //   ftpx zqwr kjrf sbek
//     },
//     tls:{
//         rejectUnauthorized:true
//     }
//   });

//   app.post('/send-email', (req, res) => {
//     const { to, subject, text, html } = req.body;
  
//     const mailOptions = {
//       from: 'manishreddy1177@gmail.com',
//       to,
//       subject,
//       text,
//       html
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Error sending email');
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(200).send('Email sent successfully');
//       }
//     });

//   });
  
app.listen(PORT,()=>console.log("listening at "+PORT)
);
