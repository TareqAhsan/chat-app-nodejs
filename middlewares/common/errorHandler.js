// const createError = require("http-errors");

// function notFoundHandeler(req, res, next) {
//   next(createError(404, "Your request content was not found"));
// }

// function errorHandeler(err, req, res, next) {
//   res.locals.error =
//     process.env.NODE_ENV = "development" ? err : { message: err.message };

//   res.status(err.status || 500);
//   if (!res.locals.html) {
//     res.render("error", {
//       title: "Error Page",
//     });
//   } else {
//     res.json(res.locals.error);
//   }
// }

// module.exports = { notFoundHandeler, errorHandeler };


const createError = require('http-errors')

const notFoundHandeler = (req,res,next)=>{
  next(createError(404,'Your request content was not found'))
}

const errorHandeler = (err,req,res,next)=>{
    res.locals.error = process.env.NODE_ENV = 'development'? err : {message:err.message}
    res.status(err.status || 500);
    if (res.locals.html) {
      res.render('error',{
        title:"Error page"
      })
    }else{
      res.json(res.locals.error)
    }
}

module.exports = {errorHandeler,notFoundHandeler}