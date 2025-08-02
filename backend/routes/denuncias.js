const express = require('express');
const router = express.Router();

// Simulação de dados para teste
const denuncias = [
  {
    id: 1,
    tipo: 'Buraco na rua',
    endereco: 'Rua A, 123',
    descricao: 'Buraco grande perto da esquina',
    data: '2025-08-01T12:00:00Z'
  },
  {
    id: 2,
    tipo: 'Iluminação pública',
    endereco: 'Av. B, 456',
    descricao: 'Lâmpada queimada',
    data: '2025-07-30T15:30:00Z'
  }
];

router.get('/recentes', (req, res) => {
  // Retorna as 10 denúncias mais recentes (simuladas)
  res.json(denuncias.slice(0, 10));
});

module.exports = router;
