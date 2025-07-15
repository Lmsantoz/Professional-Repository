
function enviar() {
  const Descricao = document.getElementById('Produto').innerText.trim();   // Nome do produto
  const Cod_barra = document.getElementById('Gtin').innerText.trim();      // Código de barras
  const Sub_grupo = document.getElementById('subGRUPO').innerText.trim();  // Subgrupo do produto
  const Corredor = document.getElementById('produtos').value;              // Corredor selecionado no <select>
  // Valida se os campos obrigatórios foram preenchidos
  if (!Cod_barra || !Corredor) {
    alert("❗ Preencha o código e selecione um corredor.");
    return; // Encerra a função se estiver incompleto
  }
  // Faz uma requisição HTTP POST para o back-end
  fetch('http://111.111.1.11:3000/cadastrar-produto', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Cod_barra,
      Descricao,
      Sub_grupo,
      Corredor
    }) // Converte os dados do formulário em JSON
  })
    // Converte a resposta do back-end para JSON
    .then(res => res.json())
    .then(data => {
      alert(data.mensagem); // Mostra a mensagem retornada pela API
      // Se a resposta indica que o produto foi cadastrado com sucesso
      if (data.mensagem.includes("cadastrado")) {
        // Redireciona o usuário para a tela principal após o sucesso
        window.location.href = "index.html"; // Ajuste esse nome se a tela principal tiver outro arquivo
      }
    })
    .catch(err => {
      console.error("[ERRO]", err); // Exibe erro no console do navegador
      alert("❌ Erro ao conectar com o servidor."); // Alerta para o usuario
    });
}
