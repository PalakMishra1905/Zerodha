const {model} = require("mongoose");
const {PositionsSchema} = require("../schema/PositionsSchema");

//model creation
const PositionsModel = new model("position", PositionsSchema);

//export
module.exports = {PositionsModel};