### Deploy:

1. Deploy disponível em: https://github.com/RAFILKLDEV/dia-zero via GitHub Pages.

### Sobre o projeto:

1. Este projeto foi desenvolvido com React e TypeScript, utilizando o Vite para o desenvolvimento e Tailwind para o estilo do projeto.

### Arquivos:

1. App.tsx: Contém a estrutura de componentes do projeto, nele foi envolvido o context para gerenciar estados em toda a aplicação.
2. main.tsx: Contém a base do render do projeto.
3. mock.js: Contém todo os dados Mockados do projeto.
4. index.css: Contém a importação do tailwind.
5. README.md: Este arquivo com informações sobre o projeto.

### Pastas:

1. components: Contém todos os componentes do projeto.
2. public/icons: Contém os icones usados no projeto.

### Funções implementadas:

1. Exibir uma lista de tickets com as seguintes colunas:ID do Ticket.Título.Status (Aberto, Em Progresso, Concluído).Última Atualização.

2. Os dados podem ser estáticos ou gerados dinamicamente (JSON mockado).

3. Filtro por status da tabela para mostrar apenas tickets com o status selecionado.

4. Alterar o status de um ticket por meio de um dropdown diretamente na tabela. Exemplo: Alterar de "Aberto" para "Concluído."

5. Ao clicar no título do ticket, abre um modal com as informações detalhadas do ticket (ex.: descrição, criador, data de criação, etc.).

6. Campo de comentários no modal do ticket, com a função de adicionar novos comentários ao ticket.

7. Interface responsiva.
