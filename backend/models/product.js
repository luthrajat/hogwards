// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var ModelSchema = new Schema({
  // Just a string
  name: {
    type: String
  },
  seller: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  imgurl: {
    type: String
  },
  quantity: {
    type: Number
  }
});


// Create the model with the name "Model"
var Model = mongoose.model("Product", ModelSchema);

// Export the Note model
module.exports = Model;
