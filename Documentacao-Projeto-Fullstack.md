
# Documentação Técnica — GTINBridge  

# Nota de segurança:
Alguns trechos do projeto foram censurados ou adaptados para preservar dados sigilosos da empresa, como tokens de API, endereços IP internos e estruturas confidenciais de banco de dados.
  
**Desenvolvido por: Lucas Marques **
---
## Introdução

Este projeto foi desenvolvido para uso interno da empresa em que trabalho, com o objetivo de **vincular um produto á um corredor** no banco de dados interno a partir da leitura de um código GTIN (código de barras).  
Integrando front-end, back-end, banco de dados e integração com API externa.

---

## Tecnologias utilizadas

| Camada        | Ferramenta              |
|---------------|-------------------------|
| Front-end     | HTML, CSS, JavaScript   |
| Back-end      | Node.js, Express        |
| Banco de Dados| MySQL                   |
| API Externa   | Bluesoft ERP (GTIN)     |
| Ambiente      | XAMPP, Live Server      |

---

## Funcionalidades

- Consulta de produtos pelo GTIN via API Bluesoft
- Armazenamento dos dados localmente com `localStorage`
- Apresentação dos dados para validação do usuário
- Cadastro no banco de dados interno MySQL
- Redirecionamento automático após cadastro
- Validações front-end para entrada de dados

---

## Estrutura de Pastas

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


## Validações implementadas

- GTIN deve conter apenas números e até 14 dígitos
- Verificação de duplicidade no banco antes de inserir
- Alertas de erro/sucesso visuais para o usuário

---

## Melhorias futuras 

- Adicionar autenticação por usuário
- Substituir `alert()` por notificações modernas (SweetAlert2)
- Integração com leitor de código de barras físico
- Criação de painel de gerenciamento e listagem

---

## Autor

Este sistema foi idealizado, desenvolvido, testado e documentado por **Lucas Marques**, atuando como desenvolvedor único no projeto.

---

**© 2025 - Lucas Marques**  
*Uso exclusivo interno*
