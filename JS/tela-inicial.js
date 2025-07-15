// Recupera os valores salvos anteriormente no localStorage do navegador
const nome = localStorage.getItem('resultadoNome');
const cod = localStorage.getItem('resultadoCodigo');
const sub = localStorage.getItem('resultadoSubGrupo');

if (nome && cod && sub) {
  // Converte os dados em JSON de string para seus reais valores
  const dadosNome = JSON.parse(nome);
  const dadosCod = JSON.parse(cod);
  const dadosSub = JSON.parse(sub);
  // Atualiza os elementos HTML com os dados recuperados
  document.getElementById("Produto").textContent = dadosNome;
  document.getElementById("Gtin").textContent = dadosCod;
  document.getElementById("subGRUPO").textContent = dadosSub;
} else {
  // Se algum dos dados estiver ausente, mostra mensagem informando
  document.getElementById("resultado").innerText = "Nenhum dado encontrado.";
}
