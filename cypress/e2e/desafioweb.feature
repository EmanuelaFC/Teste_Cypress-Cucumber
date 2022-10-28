Feature: Verificar carrinho
  Scenario: Realizar login e adcionar produto no carrinho
    Given Visito o site
    When Realizo login
    And Adiciono produto no carrinho
    Then Valido produtos inclusos no carrinho