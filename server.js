const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes')


dotenv.config();
//Connect MongoDB
connectDB();


//create app
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', propertyRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//node server.js