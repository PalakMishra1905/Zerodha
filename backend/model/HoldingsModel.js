const {model} = require('mongoose');
const { HoldingsSchema } = require ('../schema/HoldingsSchema');

//model creation
const HoldingsModel = new model("holding", HoldingsSchema);

//export
module.exports = {HoldingsModel};