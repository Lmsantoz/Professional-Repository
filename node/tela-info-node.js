const express = require('express');
const cors = require('cors');
const db = require('./banco-conexao.js'); // importa o arquivo com conexão MySQL

const app = express();

app.use(cors()); // Permite acesso CORS
app.use(express.json()); // Permite receber JSON no corpo da requisição
// Rota para cadastro de produto
app.post('/cadastrar-produto', async (req, res) => {
  const { Cod_barra, Descricao, Sub_grupo, Corredor } = req.body;
  try {
    // Verifica se o código de barras já existe
    const [existe] = await db.query(
      "SELECT * FROM cadastro_corredores WHERE Cod_barra = ?",
      [Cod_barra]
    );
    if (existe.length > 0) {
      return res.json({ mensagem: " Código já cadastrado." });
    }
    // Insere novo produto na tabela
    await db.query(
      "INSERT INTO cadastro_corredores (Cod_barra, Corredor, Descricao, Sub_grupo) VALUES (?, ?, ?, ?)",
      [Cod_barra, Corredor, Descricao, Sub_grupo]
    );
    res.json({ mensagem: " Produto cadastrado com sucesso!" });
  } catch (erro) {
    console.error("Erro ao acessar o banco:", erro);
    res.status(500).json({ mensagem: "Erro interno ao cadastrar o produto." });
  }
});
// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em 111.111.1.11 (IP fícticio)");
});
