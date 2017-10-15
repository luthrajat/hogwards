// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var UserSchema = new Schema({
  // Just a string
  email: {
    type: String
  },
  password: {
    type: String
  }
});


// Create the model with the name "Model"
var Model = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = Model;
