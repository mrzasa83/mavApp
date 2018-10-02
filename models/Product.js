// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Products
let Product = new Schema({
  product_name: {
    type: String
  },
  product_price: {
    type: Number
  },
  product_cost: {
      type: Number
  }
},{
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);