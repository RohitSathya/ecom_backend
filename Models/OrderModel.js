const mongoose = require('mongoose');

// Define the address sub-schema
const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneno: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  landmark: {
    type: String,
    required: true
  }
});

// Define the order schema
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  // New address field to store array of addresses
  address: {
    type: [addressSchema],  // An array of address objects
    required: true
  }
}, { timestamps: true });

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;
