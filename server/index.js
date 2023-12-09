const express = require('express');
const apicache = require('apicache');
const app = express();
const { connectMongodb } = require('./connection');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');

// let cache = apicache.middleware;
// app.use(cache('5 minutes'))

app.use(express.json());

const PORT = 3001

connectMongodb('mongodb://127.0.0.1:27017/easy-booking');

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.listen(PORT, () => {
  console.log('server listening at port', PORT);
})