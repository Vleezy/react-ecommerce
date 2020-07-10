//npm i express, body-parser, mongoose, and shortid
//express= webserver 
const express = require("express");
//body-parser= parse data in post request to server
const bodyParser = require("body-parser");
//mongoose= connects to mongodb 
const mongoose = require("mongoose");
//shortid= library to create userfriendly id to save as a product id
const shortid = require("shortid");

//var data = require("./build/data.json");
const app = express();
app.use(bodyParser.json());
//initialize mongodb

// deploy
// app.use("/", express.static(_dirname + "/build"));
// app.get("/", (req,res) => res.sendFile(_dirname + "/build/index.html"));

mongoose.connect("mongodb+srv://Vlad:0223407Jv@ecommerce.o8jqu.mongodb.net/ecommerce?retryWrites=true&w=majority",{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
});

//creates a model
const Product = mongoose.model(
    "products", 
    new mongoose.Schema({
        // a new id will be created and set to id
    id : {type: String, default: shortid.generate},
    // adding json and datatypes
    title : String,
    description : String,
    image : String,
    price : Number,
    availableSizes : [String],
})
);

// **GET LIST OF PRODUCTS

// first endpoint (API)
app.get("/api/products", async (req,res) => {
    //getting list of products from DB
    //find=promise has no condition , return all products
    const products = await Product.find({});
//    send back to client
    res.send(products);
});

// **CREATE LIST OF PRODUCTS

//Endpoint to create a product in db
app.post("/api/products", async (req,res) => {
    // filling req.body with new a product
const newProduct = new Product(req.body)
    // saving new product to db
const savedProduct = await newProduct.save();
res.send(savedProduct);
});

// **DELETES PRODUCT

//Endpoint delete api that finds the id and deletes it
app.delete("/api/products/:id", async (req,res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));