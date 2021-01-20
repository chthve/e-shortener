const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');
const router = require('./router');

require('dotenv').config();

const { PORT } = process.env;

const app = express();
connectDB();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT.PATCH,POST,DELETE',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`); //eslint-disable-line
});
