const express = require('express');
const morgan = require('morgan')
const authorization = require('./utils/authorization');
const port = 3000;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const session = require('express-session');

const app = express();

require('./config/database');

app.set('view engine', 'ejs');
 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(authorization.addUserToRequest);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter);

app.listen(port, () => console.log(`Port up and listening on port ${port}`));