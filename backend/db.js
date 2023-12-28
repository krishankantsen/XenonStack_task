const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.mongouri
mongoose.connect(uri);

mongoose.connection.on('connected', async () => {
    console.log('Database connected');
    
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to database:', err);
});