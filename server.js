const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes')
//create app
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', propertyRoutes);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//node server.js