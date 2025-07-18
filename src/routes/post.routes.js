//Aqui colocamos y manejamos las rutas y endpoints
const express = require('express');
const router = express.Router(); //Rutas especificas
const postController = require("../controllers/post.controllers");

router.get('/', postController.getAllPost); //Endpoint = http://localhost:3000/post/

router.get('/:id', postController.getPostById); //Endpoint = http://localhost:3000/post/:id

router.post('/', postController.createPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;