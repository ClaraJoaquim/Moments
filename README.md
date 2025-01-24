# Moments - Projeto Angular

**Moments** é um projeto desenvolvido como parte de um curso de Angular, com a orientação do Professor Matheus Batisti. O objetivo do projeto é permitir aos usuários criar e interagir com momentos especiais, compartilhando suas experiências e adicionando comentários às publicações.

### Estrutura do Projeto

Este projeto está dividido em duas pastas principais:

1. **`api/`**:  
   - Contém o **back-end** do projeto, desenvolvido em **AdonisJS**, um framework Node.js. O back-end foi disponibilizado pelo professor como parte do curso.
   - Embora o back-end já estivesse pronto, foram realizadas algumas **alterações** para integrar os dados com o front-end e permitir que o front-end consumisse os dados e armazenasse informações de forma eficiente. Essas alterações incluem a integração dos dados de momentos e comentários entre o front-end e o back-end.

2. **`moments/`**:  
   - Contém o **front-end** do projeto, desenvolvido com **Angular**.
   - O front-end é responsável pela interface de usuário, permitindo que os usuários criem momentos, adicionem comentários, editem e excluam comentários.

### Funcionalidades

- Criação de momentos e publicação de mensagens.
- Adição de comentários aos momentos.
- **Funcionalidades adicionais**: Permite a edição e exclusão de comentários.
- Interface dinâmica, com um design focado na experiência do usuário.
- Utiliza **Angular** para gerenciar o front-end e melhorar a performance da aplicação.

### Tecnologias Utilizadas

- **AdonisJS**: Framework back-end utilizado para gerenciar a API.
- **Angular**: Framework utilizado para construir a interface interativa e gerenciar o estado da aplicação.
- **TypeScript**: Linguagem de programação que acompanha o Angular para adicionar tipagem estática.
- **Bootstrap**: Framework CSS para criar um layout responsivo e moderno.
- **Reactive Forms**: Para gerenciar o formulário de criação e edição de momentos e comentários.

### Como Executar

#### 1. **Rodando o Back-End (`api/`)**

1. Navegue até o diretório `api`:
   
   ```bash
   cd api
   
2. Instale as dependências do back-end:

    ```bash
   npm install

3.  Execute o servidor do back-end:
   
    ```bash
    node ace serve --watch

O back-end estará disponível em http://localhost:3333.


#### 2. **Rodando o Front-End (moments/)**

1. Navegue até o diretório `moments`:
   
   ```bash
   cd moments
   
2. Instale as dependências do front-end:

    ```bash
   npm install

3.  Execute a aplicação do front-end:
   
    ```bash
    ng serve

Acesse o front-end no navegador em http://localhost:4200.


### Funcionalidades Extras

- **Edição e exclusão de comentários**: Permite que os usuários modifiquem ou removam comentários existentes.
- **Interface intuitiva**: Focada em simplicidade e interatividade para garantir uma boa experiência ao usuário.

### Objetivo

O objetivo do projeto foi colocar em prática os conhecimentos adquiridos no curso de Angular, especialmente em manipulação de dados, criação de formulários reativos e componentes reutilizáveis. Além disso, o projeto permitiu entender a importância de gerenciar o estado da aplicação de maneira eficiente usando o Angular, ao mesmo tempo que se integra com um back-end feito em AdonisJS.

### Contribuições

Este projeto foi orientado pelo Professor Matheus Batisti, que forneceu suporte durante o desenvolvimento e ajudou a expandir as funcionalidades do projeto.

