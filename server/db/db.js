/* eslint-disable no-console */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_PORT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('The database is connected');
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
