Feature: Validar conteudo de requisição get da api
  Scenario: Validar o conteudo do campo 'name'
    When acesso a url do trello 
    Then valido o conteúdo do campo 'name' da estrutura 'list'
