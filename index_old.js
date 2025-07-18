const express = require('express');
const app = express(); //aplicación orientada a un servidor
const PORT = 3000; 

//Middleware ->Intermediario, el cual nos ayuda leer JSON.
app.use(express.json());

//Dato simulado
const post = [
    {id: 1, title: "primer post"},
    {id: 2, title: "segundo post"}
];

//Endpoint para traer post
app.get('/posts', (req, res) =>{
    res.json(post);
});

//Endpoint para guardar un nuevo post
app.post('/posts', (req, res) =>{
    const nuevoPost = req.body;
    console.log("Nuevo post recibido:", nuevoPost);
    post.push(nuevoPost);
    res.json({message: 'Post agregado correctamente', data: nuevoPost}); //Esto es para el cliente
});

//Endpoint para eliminar el ultimo post
app.delete('/posts', (req, res) =>{
    if (post.length === 0) {
        console.log("No hay ninguna publicación para borrar");
    } else{
        const PostNuevo = post.pop();
        console.log("Se ha borrado el ultimo post");
        res.json({message: 'Se actualizo la lista de Post', data: PostNuevo});
    }
});

app.listen(PORT, ()=> {
    console.log(`Esta vivo!! nuestro server y corriendo en http://localhost:${PORT}`);
}); //Se pone al final para indicar que se alzo el servidor