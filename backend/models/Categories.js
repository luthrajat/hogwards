// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CategorySchema = new Schema({
  // Just a string
  name: {
    type: String
  },
  subcategory: {
    type: String
  },
  description: {
    type: String
  },
  imgurl: {
    type: String
  }
});


// Create the model with the name "Model"
var Model = mongoose.model("Categories", CategorySchema);

// Export the Note model
module.exports = Model;
