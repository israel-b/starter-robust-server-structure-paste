const express = require("express");
const app = express();

const pastesRouter = require("./pastes/pastes.router");

// ** VERY IMPORTANT TO ADD **
app.use(express.json());

// TODO: Follow instructions in the checkpoint to implement ths API.

const pastes = require("./data/pastes-data");
const states = require("./data/states-data");



app.use("/pastes", pastesRouter);

app.use("/states/:stateCode", (req, res, next) => {
  const { stateCode } = req.params;
  const foundState = states[stateCode];
  if(foundState) {
    res.json({data: {stateCode: stateCode, name: foundState}});
  } else {
    next({
      status: 404,
      message: `State code not found: ${stateCode}`
    });
  }
});

app.use("/states", (req, res) => {
  res.json({ data: states });
});

// Not found handler
app.use((request, response, next) => {
  next({
    status: 404,
    message: `Not found: ${request.originalUrl}`
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message});
  
});

module.exports = app;
