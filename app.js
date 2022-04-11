require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/users');
const refeshTokensRouter = require('./routes/users/refreshToken');
const mediaRouter = require('./routes/media');
const mentorsRouter = require('./routes/courses/mentors');
const coursesRouter = require('./routes/courses/courses');
const chaptersRouter = require('./routes/courses/chapters');
const lessonsRouter = require('./routes/courses/lessons');
const imageCoursesRouter = require('./routes/courses/imageCourses');
const myCoursesRouter = require('./routes/courses/myCourses');
const reviewsRouter = require('./routes/courses/reviews');
const ordersRouter = require('./routes/orders/orders');
const webhooksRouter = require('./routes/orders/webhook');
const verifyToken = require('./middlewares/verifyToken'); 
const can = require('./middlewares/permissions'); 

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/refresh-tokens', refeshTokensRouter);
app.use('/media', verifyToken, can('admin', 'student'), mediaRouter);
app.use('/mentors', verifyToken, can('admin'), mentorsRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', verifyToken, can('admin'), chaptersRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/image-courses', verifyToken, can('admin'), imageCoursesRouter);
app.use('/my-courses', verifyToken, can('admin', 'student'), myCoursesRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewsRouter);
app.use('/orders', verifyToken, can('admin', 'student'), ordersRouter);
app.use('/webhook', webhooksRouter);

module.exports = app;
