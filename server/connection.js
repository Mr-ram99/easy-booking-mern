const mongoose = require('mongoose');

const connectMongodb = (url) =>{
  mongoose.connect(url)
  .then(() => {
    console.log('connected to easy-booking database');
  })
  .catch((error) => {
    console.log('not connected:', error);
  });
}

module.exports = { connectMongodb }
