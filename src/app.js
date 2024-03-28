"use strict";

//모듈 
const express = require("express");
const app = express();

//라우팅
const indexRouter = require('./routes/indexRoutes');
const home = require("./login/routes/home");

const PORT = 3000;

//앱 세팅
app.set('views', './views');
// app.set("views", "./login/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use('/', indexRouter);
// app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
module.exports = app;
