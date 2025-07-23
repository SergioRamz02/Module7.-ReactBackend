const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/auth.routes')

const app = express(); //Trabaja como servidor

connectDB(); //Inicializa la conexion

//Middleware
app.use(cors()); // permite que otros desarrollos se comuniquen con este servidor
app.use(express.json()); //uso de JSONs

//Registrando rutas
app.use('/post', postRoutes); //Endpoint = http://localhost:3000/post
app.use('/user', userRoutes);

module.exports = app;