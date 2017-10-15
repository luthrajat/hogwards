var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var Product = require('./models/product.js');
var Categories = require('./models/Categories.js');
var Cart = require('./models/Cart.js');
var User = require('./models/User.js');
var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||4999;

// Sets up the Express app to handle data parsing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


// Mongoose
// =============================================================

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/ecommerce");
// mongoose.connect("mongodb://heroku_8h7bq78n:9lhr1s2sdn9klgf4858k5dru6h@ds163053.mlab.com:63053/heroku_8h7bq78n");

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

//
// var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };


// Routes
// =============================================================
app.get("/product", function(req, res) {
    Product.find({}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/product/:category", function(req, res) {
    Product.find({"category": req.params.category }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/productdetails/:id", function(req, res) {
    Product.findOne({"_id": req.params.id }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

// Create a new note or replace an existing note
app.post("/product", function(req, res) {

  // mongoose requires the user to build up an object to pass to the constructor
  var result = {};

  // Add the text and href of every link, and save them as properties of the result object
  result.name = req.body.name;
  result.seller = req.body.seller;
  result.category = req.body.category;
  result.price = req.body.price;
  result.imgurl = req.body.imgurl;
  result.quantity = req.body.quantity;

  var entry = new Product(result);

  // And save the new product to the db
  entry.save(function(err, document) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    else{
      res.send("success")
    }
  });
})

// Category post
// Create a new note or replace an existing note
app.post("/category", function(req, res) {

  // mongoose requires the user to build up an object to pass to the constructor
  var result = {};

  // Add the text and href of every link, and save them as properties of the result object
  result.name = req.body.name;
  result.description = req.body.description;
  result.imgurl = req.body.imgurl;
  result.subcategory = req.body.subcategory;

  var entry = new Categories(result);

  // And save the new product to the db
  entry.save(function(err, document) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    else{
      // res.send("success")
      res.json(req.body);
    }
  });
});

app.get("/category", function(req, res) {
    Categories.find({}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/category/:id", function(req, res) {
    Categories.findOne({"_id": req.params.id }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/category/:subcategory", function(req, res) {
    Categories.findOne({"subcategory": req.params.subcategory }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});


app.get("/cart", function(req, res) {
    Cart.find({}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/cart/:user", function(req, res) {
    Cart.find({"username": req.params.user }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.get("/cart/:user/:id", function(req, res) {
    Cart.findOne({"username": req.params.user, "itemid": req.params.id }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        if (null==results || results.length==0) {
          var obj = {};
          obj.itemid   = req.params.id;
          obj.quantity =1;
          obj.username =req.params.user;
          var newEntry = new Cart(obj);
          newEntry.save(function(err, doc) {
            if (err){
              console.log(err);
            } else {
              results = newEntry;
            }
          });
        } else {
          Cart.findOneAndUpdate({"username": req.params.user, "itemid": req.params.id }, {$inc: {quantity: 1 }} , function(error, uresults) {
            if(error) {
              console.log(error);
              results = error;
            } else {
              results = uresults;
            }
          });
        }
        res.json(results);
      }
    });
});

app.delete("/cart/:user", function(req, res) {
    Cart.remove({"username": req.params.user }, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});


app.get("/user", function(req, res) {
    Cart.find({}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});

app.post("/user", function(req, res) {
    Cart.findOne({"username": req.body.username, "password": req.body.password}, function(error, results) {
      if(error) {
        console.log(error);
        res.json(error);
      } else {
        res.json(results);
      }
    });
});



// Listen on the server
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
