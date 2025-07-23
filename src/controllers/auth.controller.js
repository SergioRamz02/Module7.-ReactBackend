const User = require('../models/user.model');

exports.register = async (req, res) =>{
    const user = new User(req.body); // Creo al usuario
    await user.save(); //Guardar en la base de datos
    return res.status(201).json(user);
};

exports.login = async (req, res) =>{
    const user = await User.findOne({email: req.body.email, password: req.body.password}); // Buscar en la base de datos
    if (user) return res.json(user);
    return res.status(401).json({message: 'Credenciales invalidas'});
};