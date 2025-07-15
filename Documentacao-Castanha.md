
# 📄 Documentação Técnica — Sistema de Cadastro de Produtos por GTIN  
**Projeto interno - Castanhão Atacadista**  
**Desenvolvido por: Castanhão (Desenvolvedor único)**

---

## 📌 Introdução

Este projeto foi desenvolvido para uso interno no **Castanhão Atacadista**, com o objetivo de **automatizar o processo de cadastro de produtos** no banco de dados interno a partir da leitura de um código GTIN (código de barras).  
Toda a aplicação foi desenvolvida por um único profissional, integrando front-end, back-end, banco de dados e integração com API externa.

---

## 🧰 Tecnologias utilizadas

| Camada        | Ferramenta              |
|---------------|-------------------------|
| Front-end     | HTML, CSS, JavaScript   |
| Back-end      | Node.js, Express        |
| Banco de Dados| MySQL                   |
| API Externa   | Bluesoft ERP (GTIN)     |
| Ambiente      | XAMPP, Live Server      |

---

## 🧠 Funcionalidades

- Consulta de produtos pelo GTIN via API Bluesoft
- Armazenamento dos dados localmente com `localStorage`
- Apresentação dos dados para validação do usuário
- Cadastro no banco de dados interno MySQL
- Redirecionamento automático após cadastro
- Validações front-end para entrada de dados

---

## 🗂️ Estrutura de Pastas

```
Projeto-Fullstack/
├── node/
│   ├── banco-conexao.js
│   └── tela-info-node.js
├── JS/
│   ├── tela-info.js
│   └── buscar-dados.js
├── CSS/
│   └── estilo.css
├── assets/
│   └── imagens, logos etc.
├── index.html
└── Tela-info.html
```

---

## ⚙️ Configuração e Execução

### 1. Banco de Dados

```sql
CREATE DATABASE IF NOT EXISTS castanha;

USE castanha;

CREATE TABLE cadastro_corredores (
  Cod_barra VARCHAR(50) PRIMARY KEY,
  Corredor VARCHAR(50),
  Descricao TEXT,
  Sub_grupo VARCHAR(100)
);
```

### 2. Instalar dependências do Node.js

```bash
npm install express cors mysql2
```

### 3. Iniciar o servidor

```bash
node node/tela-info-node.js
```

### 4. Acessar o front-end

Via Live Server: `index.html`

---

## 🔗 Integração com API Bluesoft

- Endpoint: `GET https://erp.bluesoft.com.br/castanha/api/comercial/produtos/gtin/{codigo}`
- Token de autenticação via header `X-Customtoken`
- Retorno esperado: JSON com descrição, subgrupo e GTIN

---

## 📡 Comunicação Front-end e Back-end

- Dados carregados no `Tela-info.html` a partir do `localStorage`
- Envio dos dados via `fetch()` para `/cadastrar-produto`
- O Node.js recebe, valida e grava os dados no MySQL

---

## ✅ Validações implementadas

- GTIN deve conter apenas números e até 14 dígitos
- Verificação de duplicidade no banco antes de inserir
- Alertas de erro/sucesso visuais para o usuário

---

## 🧱 Melhorias futuras (sugestões)

- Adicionar autenticação por usuário
- Substituir `alert()` por notificações modernas (SweetAlert2)
- Integração com leitor de código de barras físico
- Criação de painel de gerenciamento e listagem

---

## 👨‍💻 Autor

Este sistema foi idealizado, desenvolvido, testado e documentado por **Castanhão**, atuando como desenvolvedor único no projeto.

---

**© 2025 - Castanhão Atacadista**  
*Uso exclusivo interno*
