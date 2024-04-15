require("dotenv").config();
require('express-async-errors');

//모듈 
const connectDB = require("./db/connect")
const express = require("express");
const cors = require('cors')
const app = express();
const ejsMate = require("ejs-mate")


//라우팅
const indexRouter = require('./routes/indexRoutes');
const loginRouter = require('./routes/user');
//앱 세팅
app.set('views', './views');
app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(cors())
app.use(express.json());

app.use('/', loginRouter);
app.use('/api/v1', indexRouter);
// app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// module.exports = app;
app.get("/", (req, res) => {
  res.render("login")
})

app.get("/register", (req, res) =>{
  res.render("register")
})

app.get("/dashboard", (req, res) => {
  res.render("index")
})
const port = process.env.PORT || 3000;

const start = async () => {

  try {        
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => {
          console.log(`Server is listening on port ${port}`);
      })

  } catch (error) {
     console.log(error); 
  }
}

start();