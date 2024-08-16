const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: String,
  image: String,
  description: String,
  brand: String,
  rating: Number,
  count: Number,
  mrp: String,
  dis: String,
  pur: String,
  t: [String], // Ingredients
  ati: [String], // Attributes
});

module.exports = mongoose.model('Product', productSchema);
