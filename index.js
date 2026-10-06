require('dotenv').config();
const express = require('express'); // si lo usas: yarn add express
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Backend desplegado'));
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));