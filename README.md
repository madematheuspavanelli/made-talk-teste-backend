# E-commerce

## Entidades

## Carrinho de compras (Cart)

- [ ] Possui uma lista de itens
  - [ ] deve ser inicializada vazia
  - [ ] não pode haver itens repetidos (se o mesmo produto for adicionado novamente é contabilizado +1 no mesmo item)
- [ ] Tem um subtotal
  - [ ] deve ser inicializado com valor zero
  - [ ] O subtotal é atualizado cada vez algum item é adicionado, removido ou alterado
  - [ ] O subtotal é a soma dos valores de cada item (preço do produto x quantidade)
- [ ] Caso um produto tenha 4 ou mais unidades deve ser aplicado um desconto de 10% no valor do produto

## Item

- [ ] Representa o nome do produto e a sua quantidade
- [ ] O nome é uma string e não pode ser vazia
- [ ] A quantidade é um inteiro com valor mínimo 1
