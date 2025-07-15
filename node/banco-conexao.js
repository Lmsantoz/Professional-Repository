
const mysql = require('mysql2/promise');
// Cria um pool de conexões com o banco de dados MySQL
const db = mysql.createPool({
  host: '111.1.1.1 (host fícticio)',           // Endereço do servidor
  user: '****',                // Nome do usuário do banco de dados
  password: '',                // Senha do usuário
  database: '*****',        // Nome do banco de dados a ser utilizado
  waitForConnections: true,    // Fila de espera se todas as conexões estiverem ocupadas
  connectionLimit: 10,         // Número máximo de conexões simultâneas
  queueLimit: 0                // Limite de solicitações em espera
});
// Função autoexecutável que testa a conexão com o banco ao iniciar o sistema
(async () => {
  try {
    const connection = await db.getConnection();
    console.log('[MySQL] Conexão estabelecida com sucesso!');
    connection.release();
  } catch (error) {
    console.error('[MySQL] Erro ao conectar:', error.message);
  }
})();
// Exporta o pool de conexões para usar em outros arquivos
module.exports = db
console.log(db);
