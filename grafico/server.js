// server.js
const express = require('express');
const app = express();

// Dados fictícios sobre o uso de celulares
const dadosMundo = {
  ano: 2023,
  usuarios: 5.5,  // bilhões de usuários
  percentualUso: 85,  // percentual da população mundial que usa celular
  dispositivos: ['smartphone', 'tablet', 'outros'],
};

const dadosColégio = {
  nome: 'Escola XYZ',
  ano: 2023,
  usuarios: 350,  // número de estudantes
  percentualUso: 90,  // percentual de estudantes que usam celular
  dispositivos: ['smartphone', 'notebook'],
};

// Endpoint para obter dados sobre o uso de celulares no mundo
app.get('/api/mundo', (req, res) => {
  res.json(dadosMundo);
});

// Endpoint para obter dados sobre o uso de celulares no colégio
app.get('/api/colegio', (req, res) => {
  res.json(dadosColégio);
});

// Endpoint para comparar o uso de celulares entre o mundo e o colégio
app.get('/api/comparacao', (req, res) => {
  const comparacao = {
    usuariosMundo: dadosMundo.usuarios,
    usuariosColegio: dadosColégio.usuarios,
    percentualMundo: dadosMundo.percentualUso,
    percentualColegio: dadosColégio.percentualUso,
    dispositivosMundo: dadosMundo.dispositivos,
    dispositivosColegio: dadosColégio.dispositivos,
  };

  res.json(comparacao);
});

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
