const express = require('express');
const postRoutes = require('./routes/post.routes')

const app = express(); //Trabaja como servidor
app.use(express.json);

//Registrando rutas
app.use('/post', postRoutes); //Endpoint = http://localhost:3000/post

module.exports = app;