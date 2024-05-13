// console.log("Simple Crud App by ----");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// importing model
// adding .js is for preventing from error in future
const Product = require("./models/product.model.js");

// middlewares
app.use(express.json()); // middleware for extracting data from body
app.use(express.urlencoded({ extended: false })); // middleware for form url encoder

// routes
const productRoute = require("./routes/product.route.js");
app.use("/api/products", productRoute);

// .get() and .post() are methods used to define routes for handling HTTP GET and POST requests, respectively.
// notes at end of this page.

// GET -> from client to the server
app.get("/", (req, res) => {
  res.send("<h1>Hello world of Tech!</h1>");
});

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({}); // Product.find() is mongoose query for finding record
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// fetch specific data based on ID
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id); // mongoose Query
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST -> submitting data from frontend to the server

// app.post("/api/products", (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body); // Product.create() is moongose query for creating record
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message }); // status(500) -> server error
//   }
// });

// Update a Product
// PUT -> used for updating existing resources in the database
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params; // destructure id from params
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(400).json({ message: "Product Not Found" });
//     }

//     // again check, that product is in database
//     const updatedProduct = await Product.findById(id);

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Delete a Product
// DELETE -> remove resources from the server or database
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id); // mongoose query to delete

//     if (!product) {
//       return res.status(404).json({ message: "Product Not Found" });
//     }

//     res.status(200).json({ message: "Product Deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// way to connect to the database
mongoose
  .connect(
    "mongodb+srv://1999praveshsingh:24ccBuYuZ7CVccZA@backenddb.hidbawg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to the Database");
    app.listen(8000, () => console.log("server is running at port 8000"));
  })
  .catch(() => {
    console.log("connection Failed");
  });

// ----------------------------------------NOTES----------------------------------------------------------

// mongodb+srv://1999praveshsingh:24ccBuYuZ7CVccZA@backenddb.hidbawg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB

// GET METHOD:
// It is used to define a route for handling HTTP GET requests. When a client makes a GET request
// to the specified route, Express executes the callback function associated with that route.
// This callback function typically sends back a response to the client, which could be HTML,
// JSON, or any other content.

// POST METHOD:
// It is used to define a route for handling HTTP POST requests. Similar to .get(), when a client makes
// a POST request to the specified route, Express executes the callback function associated with that route.
// This callback function typically handles data sent from the client, processes it, and then sends back a response.

// GET:
// This method is used to fetch data from the server, which is crucial for displaying information
// to users in your React.js frontend.

// POST:
// Essential for submitting data from your React.js frontend to the server, such as form submissions
//  or creating new resources in the database.

// PUT / PATCH:
// These methods are used for updating existing resources in the database. Understanding the difference
// between PUT (typically used to update the entire resource) and PATCH (used to apply partial updates) is important.

// DELETE:
// Used to remove resources from the server or database, which is necessary for deleting records or data.

// OPTIONS:
// While not always explicitly implemented, understanding OPTIONS requests can be helpful
// for handling CORS (Cross-Origin Resource Sharing) issues, especially when your frontend
// and backend are hosted on different domains.
