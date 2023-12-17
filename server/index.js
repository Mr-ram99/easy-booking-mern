const express = require('express');
const cookieParser = require('cookie-parser');
const apicache = require('apicache');
const cors = require('cors');
const app = express();
const { connectMongoDB } = require('./connection');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');
const staticRouter = require('./routes/static');
const {authenticateUser, checkAuth } = require('./middlewares/auth');

const dotenv = require('dotenv');
dotenv.config();

// let cache = apicache.middleware;
// app.use(cache('5 minutes'))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(cookieParser());
app.use(express.json());
app.use(checkAuth);
const PORT = 3001

connectMongoDB(process.env.DATABASE_URL);

app.use('/', staticRouter);
app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.listen(PORT, () => {
  console.log('server listening at port', PORT);
})