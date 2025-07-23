require('dotenv').config(); //Indica que todo este concatenado con dotenv
const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
