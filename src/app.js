const express = require("express");
const app = express();

const pastesRouter = require("./pastes/pastes.router");
const statesRouter = require("./states/states.router");
const usersRouter = require("./users/users.router");


// ** VERY IMPORTANT TO ADD **
app.use(express.json());

// TODO: Follow instructions in the checkpoint to implement ths API.
app.use("/pastes", pastesRouter);
app.use("/states", statesRouter);
app.use("/users", usersRouter);

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
