var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'osunwachibueze@gmail.com',
    pass: 'hxpd pvmd raqd mvwg'
  }
});

var mailOptions = {
  from: 'osunwachibueze@gmail.com',
  to: 'odubolu27@gmail.com',
  subject: 'FUCKKKKKKKKKKKKKKKKKKKKK',
  text: 'YOUUUUUUUUUUUUUUUUUUU!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});