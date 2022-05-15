// internal import

const {
  notFoundHandeler,
  errorHandeler,
} = require("./middlewares/common/errorHandler");

const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRouoter')
// external import
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
// const req = require("express/lib/request");
require("dotenv").config();
const app = express();

// mongoose
//   .connect(process.env.MONGO_CONNECTION_STRING, {
//     userNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connect successfully"))
//   .catch((err) => console.log(err));

// connection to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
  } catch (err) {
    console.log(err);
  }
};
connectDB();

//request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set ejs engine
app.set("view engine", "ejs");
// set static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing
app.use('/',loginRouter);
app.use('/users',usersRouter);
app.use('/inbox',inboxRouter)
//error handeling  404 error handeler

//notfound handeler
app.use(notFoundHandeler)

// default error handeler
app.use(errorHandeler)

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
