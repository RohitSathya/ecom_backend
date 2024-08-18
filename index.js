const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const router = require('./Routes/Routes');
const pr = require('./Routes/productRoutes');

app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: ['https://explorepricing.com', 'https://www.explorepricing.com',https://ecomerce-mern-royo.vercel.app], // Allow both domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Routes
app.use("/product", router);
app.use('/pro', pr);

app.get("/", async (req, res) => {
  res.json("hi");
});

// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://admin:sunsetwest1234RRR@royoapi.3qmdrjq.mongodb.net/ecomeerce?retryWrites=true&w=majority")
  .then(() => {
    console.log('Database connected');
    app.listen(8081, () => console.log('Server is running on port 8081'));
  })
  .catch(err => {
    console.error('Failed to connect to the database', err);
  });
