const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Servindo arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`✅ Servidor frontend rodando na porta ${PORT}`);
});
