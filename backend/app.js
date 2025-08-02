const express = require('express');
const app = express();
const denunciasRouter = require('./routes/denuncias');

app.use(express.json());

app.use('/api/denuncias', denunciasRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
