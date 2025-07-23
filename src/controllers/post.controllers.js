//Decide que se va a realizar, es la parte lógica de la app.
const Post = require('../models/post.model')

//Lógica de obtener todos los posts (GET)
exports.getAllPost = async (req, res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: 'Error al obtener todos los posts', error: err.message});
    }
};

//Obtiene post por id
exports.getPostById = async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id); // Buscar en la base de datos
        if (post) return res.json(post);
        return res.status(401).json({message: 'Post no encontrado'});
    } catch (err) {
        return res.status(500).json({message: 'Error al obtener el post', error: err.message});
    }
    
};

//Crear post (POST)
exports.createPost = async (req,res) =>{
    const post = new Post(req.body);
    await post.save();
    return res.status(201).json(post);
};

//Actualiza datos de post por id ()
exports.updatePost = async (req, res) =>{
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(updated);
};

//Eliminar un post por id
exports.deletePost = async (req, res) =>{
    await Post.findByIdAndDelete(req.params.id);
    return res.status(204).end();
};