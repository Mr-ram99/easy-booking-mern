const mongoose = require('mongoose');

const connectMongoDB = (url) =>{
  mongoose.connect(url)
  .then(() => {
    console.log('Connected to easy-booking database');
  })
  .catch((error) => {
    console.log('MongoDB not connected:', error);
  });
}

module.exports = { connectMongoDB }
