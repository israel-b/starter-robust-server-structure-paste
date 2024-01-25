const states = require("../data/states-data");

const validateStateCode = (req, res, next) => {
    const { stateCode } = req.params;
    const foundState = states[stateCode];
    if(foundState) {
        next();
      } else {
        next({
          status: 404,
          message: `State code not found: ${stateCode}`
        });
      }
}

  
  const list = (req, res) => {
    res.json({ data: states });
  }

  const read = (req, res) => {
    const { stateCode } = req.params;
    const foundState = states[stateCode];
    res.json({data: {stateCode: stateCode, name: foundState}});
  }

  module.exports = {
    read: [validateStateCode, read],
    list,
  };