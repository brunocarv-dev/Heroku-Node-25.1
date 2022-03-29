const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Está vivo!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta: ${PORT}`));