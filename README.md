## 💡 SkillBridge – Plataforma Inteligente de Requalificação Profissional

**SkillBridge** é uma plataforma inteligente desenvolvida para a **Global Solution 2025**, focada na requalificação profissional e transição de carreira. O Front-End foi construído em React com o paradigma de **Componentização** e **Estilização Exclusiva com Tailwind CSS**. O sistema utiliza Inteligência Artificial (simulada via API) para conectar trabalhadores a trilhas de aprendizado personalizadas, promovendo a inclusão produtiva.

---

# Status do Projeto

✅ **Concluído e Publicado**

---

# Sumário

1.  Título e Descrição
2.  Status do Projeto
3.  Sumário
4.  Sobre o Projeto
5.  Tecnologias Utilizadas
6.  Instalação
7.  Como Usar (URL de Deploy)
8.  Estrutura de Pastas
9.  Endpoints ou Rotas Principais
10. Autores e Créditos
11. Screenshots / Demonstração
12. Contato

---

# Sobre o Projeto

O Front-End implementa uma **Single Page Application (SPA)** utilizando **React + Vite + TypeScript**. O projeto segue o fluxo de dados unidirecional (One-way Data Flow) e cumpre a regra de tema global com a **Context API (`useContext`)** para o Dark Mode/Light Mode. As operações de CRUD (Create, Read, Update, Delete) são realizadas consumindo a API Java hospedada.

---

# Tecnologias Utilizadas

| Categoria | Tecnologia | Observações |
| :--- | :--- | :--- |
| **Framework** | **React** v19 | Uso obrigatório e base para a componentização. |
| **Build Tool** | **Vite** | Para inicialização e build rápido. |
| **Linguagem** | **TypeScript** | Para tipagem de dados (`type`, `interface`) e segurança. |
| **Estilização** | **Tailwind CSS** | Uso **exclusivo** para design utility-first e responsividade. |
| **Roteamento** | **React Router DOM** | Para rotas dinâmicas e navegação SPA. |
| **Forms/Validação** | **React Hook Form** | Para gerenciamento de estado e validação de formulários. |
| **Estado Global** | **Context API** | Para Tema Escuro (Evitando *prop drilling*). |

---

# Instalação

Para configurar o ambiente localmente:

1.  **Pré-requisitos:** Node.js e Git instalados.
2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SkillBridge-GS/skillbridge-react.git]
    cd skillbridge
    ```
3.  **Instale as Dependências (Node Modules):**
    ```bash
    npm install
    ```
4.  **Execute em Desenvolvimento:**
    ```bash
    npm run dev
    ```

---

# Como Usar (URL de Deploy) 

A aplicação está publicada na plataforma Vercel, garantindo integração contínua com o GitHub.

**URL DA APLICAÇÃO (DEPLOY NA VERCEL):** `skillbridge-react-five.vercel.app`

### Instruções de Acesso:
1.  **Cadastro:** Acesse `/cadastro` (ou use o link "Cadastre-se") e crie um novo usuário (`POST /usuario`).
2.  **Login:** Use o e-mail e senha cadastrados. A autenticação é feita buscando a lista de usuários na API Java (`GET /usuario`).
3.  **Perfil (CRUD):** Após o login, a rota `/perfil` permite Criar, Ler, Atualizar ou Deletar o Perfil de Requalificação associado ao seu `idUsuario` (Consumo de APIs: POST/PUT/DELETE /perfil)[cite: 1036].

---

# Estrutura de Pastas 

A arquitetura segue o padrão modular para escalabilidade:

* `src/components/`: Componentes reutilizáveis (Layout, Forms, UI).
* `src/contexts/`: Lógica de estado global (`ThemeContext.tsx`).
* `src/routes/`: Páginas da aplicação (Rotas: Home, Login, Perfil).
* `src/types/`: Definições de Tipagem TypeScript (`IUsuario`, `IPerfil`).
* `src/assets/`: Arquivos estáticos (Imagens dos Integrantes).

---

# Endpoints ou Rotas Principais 

| URI | Propósito | API Java Consumida | Observação |
| :--- | :--- | :--- | :--- |
| `/` | Home | N/A | Página Inicial e Apresentação. |
| `/integrantes` | Integrantes | N/A | Requisito Obrigatório[cite: 947]. |
| `/cadastro` | Cadastro | **POST** `/usuario` | Criação de novo usuário. |
| `/login` | Login | **GET** `/usuario` | Autenticação (validação de credenciais). |
| `/perfil` | Perfil CRUD | **GET, POST, PUT, DELETE** `/perfil` | Gerenciamento de dados de Requalificação. |
| `/faq` | FAQ | N/A | Perguntas Frequentes. |

---

# Autores e Créditos

Este projeto foi desenvolvido pela equipe [**SkillBridge**] para a Global Solution do 1º ano de Análise e Desenvolvimento de Sistemas.

---

# Screenshots / Demonstração 

**LINK DO VÍDEO NO YOUTUBE (DEMONSTRAÇÃO DO PROJETO):** `[INSIRA O LINK DO VÍDEO DE ATÉ 3 MINUTOS AQUI]`

* <a href="https://ibb.co/x8hFRvkY"><img src="https://i.ibb.co/zHs60cMF/D3-DC61-AA-B7-E0-4158-9359-C12301717770.png" alt="D3-DC61-AA-B7-E0-4158-9359-C12301717770" border="0"></a>

* <a href="https://ibb.co/WNwvKDL8"><img src="https://i.ibb.co/6cx0svk9/E5720-BCB-7-DDA-48-A8-800-E-3-CDEF05-AD0-A0.png" alt="E5720-BCB-7-DDA-48-A8-800-E-3-CDEF05-AD0-A0" border="0"></a>

* <a href="https://ibb.co/Mx4bRRbF"><img src="https://i.ibb.co/39qw00wg/33544965-1-B05-4-C86-B793-B60-FF5-D3-BD47.png" alt="33544965-1-B05-4-C86-B793-B60-FF5-D3-BD47" border="0"></a>

---

# Contato

| Nome | RM | Turma | GitHub |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lucas Tavares Dagrosa** | [563424] | 1TDSPG | 
| **Leonardo Zerbinatti** | [67890] | 1TDSPH |
| **Diogo Cunha** | [563654] | 1TDSPH |
