require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');

const app = express();
const port = 5000 || process.env.PORT;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
  // Date.now() - 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
// 데이터베이스 연결
connectDB();  

// 정적 파일들
app.use(express.static('public'));

// 템플릿 엔진
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');



// 라우팅
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

//모건
app.use(morgan('dev'))

// 404 설정
app.get('*', function(req, res) {
  //res.status(404).send('404 Page Not Found.')
  res.status(404).render('404');
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});