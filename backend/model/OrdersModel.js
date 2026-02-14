const {model} = require("mongoose");
const {OrdersSchema} = require("../schema/OrdersSchema");

//model creation
const OrdersModel = new model("order", OrdersSchema);

//export
module.exports = {OrdersModel};