// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CartSchema = new Schema({
  // Just a string
  itemid: {
    type: String
  },
  quantity: {
    type: Number
  },
  username: {
    type: String
  }
});

// Create the model with the name "Model"
var Model = mongoose.model("Cart", CartSchema);

// Export the Note model
module.exports = Model;
