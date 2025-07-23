//Aqui colocamos y manejamos las rutas y endpoints
const express = require('express');
const router = express.Router(); //Rutas especificas
const authController = require("../controllers/auth.controller");

router.post('/register', authController.register); //Endpoint = http://localhost:8080/register/
router.post('/login', authController.login);

module.exports = router;