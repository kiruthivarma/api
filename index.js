// import express
const express = require('express');

// import axios to use live API
const axios = require('axios');

// Call express
const app = express();

// Send data in text formart within localhost
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get data from live API and use async to complete and exit
async function getProducts() {
  const API_DOMAIN = 'https://fakestoreapi.com/';
  const response = await axios.get(API_DOMAIN + 'products');
  return (response.data);
};

// Fetch and display data from API via URL
app.get('/products', async(req, res) => {
    const products = await getProducts();
    res.send(products);
    console.log(products);
}
);

// Get data from live API and use async to complete and exit
async function getProductswithID(id) {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = await axios.get(API_DOMAIN + 'products/' + (id ? '/' + id : ''));
    return (response.data);
  };

// Get specific product by ID
app.get('/products/:id', async(req, res) => {
    console.log(req.params.id);
    const products = await getProductswithID(req.params.id); // Fix: use req.params.id instead of id
    res.send(products);
}
);

// Host port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);

