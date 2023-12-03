const express = require("express");
const App = express();
const { storedata } = require("./data");

const middleware = (req, res, next) => {
  console.log("middleware call");

  next();
};

App.get("/bollywood", middleware, (req, res) => {
  console.log(storedata);
  return res.send(storedata);
});

App.listen(6050, () => {
  console.log("started.........");
});
