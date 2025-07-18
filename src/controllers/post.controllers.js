//Decide que se va a realizar, es la parte lógica de la app.
let posts = require('../models/post.model');

//Lógica de obtener todos los posts (GET)
exports.getAllPost = (req, res) =>{
    res.json(posts);
};

//Obtiene post por id
exports.getPostById = (req, res) =>{
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({error: 'Post no encontrado'});
    res.json(post);
};

//Crear post (POST)
exports.createPost = (req,res) =>{
    //en lugar de usar un id con fecha, usar un id numerico, pero primero deben de buscar 
    // que no exista un id con el mismo valor, si ya existe uno mostrar el error de post con id existente
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    return res.status(201).json(newPost);
};

//Actualiza datos de post por id ()
exports.updatePost = (req, res) =>{
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({error: 'Post no encontrado'});

    posts[index] = {
        ...posts[index],
        title: req.body.title,
        content: req.body.content
    };

    return res.json(posts[index]);
};

//Eliminar un post por id
exports.deletePost = (req, res) =>{
    const id = parseInt(req.params.id);
    const inicial = posts.length;
    posts = posts.filter(p => p.id !== id);
    if (posts.length ===inicial) return res.status(404).json({error: 'Post no encontrado'});

    //Actualizar el modulo donde esta nuestro arreglo de posts
    require("../models/post.model").splice(0, require("../models/post.model").length, ...posts);

    return res.status(204).end();
};