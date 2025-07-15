
function encaminhar() {
    // Captura o valor do campo de entrada com id="GTIN" e remove espaços
    const codigo = document.getElementById('GTIN').value.trim();
    if (codigo.length > 14 || isNaN(codigo)) {
        alert("Insira um código válido");
        return; // Interrompe a execução
    } 
    else if (codigo.length <= 0) {
        alert("Insira um código para continuar");
        return;
    }
    // Função que irá buscar os dados via API
    async function buscarDados() {
        try {
            // Token de autenticação para acessar a API do ERP Bluesoft
            const token = "*********";
            // Chamada à API Bluesoft para buscar dados do produto via GTIN
            const resposta = await fetch(`https:/URL/fícticia/${codigo}`, {
                method: 'GET',
                headers: {
                    'X-Customtoken':  token, // Token personalizado
                    'Accept': 'application/json' // Tipo de resposta esperada
                }
            });
            // Se a resposta não for OK (200) lança um erro
            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }
            // Converte a resposta para objeto JSON
            const dados = await resposta.json();
            // Extrai os dados relevantes da resposta
            const nomeProduto = dados.descricao; // Nome do produto
            const codigoPlu = dados.gtins; // Lista de GTINs
            const subgrupo = dados.subGrupoProduto; // Subgrupo do produto
            // Armazena os dados no localStorage para uso em outra tela
            localStorage.setItem('resultadoNome', JSON.stringify(nomeProduto));
            localStorage.setItem('resultadoCodigo', JSON.stringify(codigoPlu));
            localStorage.setItem('resultadoSubGrupo', JSON.stringify(subgrupo));
            // Redireciona o usuário para a próxima tela onde os dados serão exibidos
            window.location.href = "Tela-info.html";
        } catch (erro) {
            // Em caso de erro na requisição exibe no console e alerta o usuário
            console.error('Erro ao buscar dados:', erro);
            alert("Erro ao buscar dados do produto.");
        }
    }
    buscarDados();
}
