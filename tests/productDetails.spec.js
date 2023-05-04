const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  
  });
});

  test('deve ser uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  test('o retorno deve ser um array', () => {
    const resultado = productDetails('Produto 1', 'Produto 2');
    expect(Array.isArray(resultado)).toBe(true);
  });

  test('o array deve conter dois itens dentro', () => {
    const resultado = productDetails('Produto 1', 'Produto 2');
    expect(resultado.length).toBe(2);
  });

  test('os itens do array devem ser objetos', () => {
    const resultado = productDetails('Produto 1', 'Produto 2');
    expect(typeof resultado[0]).toBe('object');
    expect(typeof resultado[1]).toBe('object');
  });

  test('os objetos devem ser diferentes quando parâmetros diferentes são passados', () => {
    const resultado1 = productDetails('Produto 1', 'Produto 2');
    const resultado2 = productDetails('Produto 3', 'Produto 4');
    expect(resultado1[0]).not.toEqual(resultado2[0]);
    expect(resultado1[1]).not.toEqual(resultado2[1]);
  });

  test('os dois productIds devem terminar com 123', () => {
    const resultado = productDetails('Produto 1', 'Produto 2');
    expect(resultado[0].details.productId).toMatch(/123$/);
    expect(resultado[1].details.productId).toContain('123');
  });