/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {

  test('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    const result = circle(3);
    const expectedArea = Math.PI * 3 * 3;
    const expectedCircumference = 2 * Math.PI * 3;
  
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('radius', 3);
    expect(result).toHaveProperty('area');
    expect(result.area).toBeCloseTo(expectedArea, 2);
    expect(result).toHaveProperty('circumference');
    expect(result.circumference).toBeCloseTo(expectedCircumference, 2);
  });

  test('deve retornar indefinido quando o parâmetro não é um número', () => {
    expect(circle('not a number')).toBeUndefined();
  });

  test('círculo deve retornar um objeto', () => {
    expect(typeof circle(5)).toBe('object');
  });

  test('retorna um objeto com 3 propriedades', () => {
    const circleObj = circle(5);

    expect(typeof circleObj).toBe('object');
    expect(Object.keys(circleObj).length).toBe(3);
  });

  test('deve retornar indefinido quando chamado sem nenhum parâmetro', () => {
    expect(circle()).toBeUndefined();
  });

  test('retorna a circunferência correta para um círculo com raio 2', () => {
    const result = circle(2);
    const expectedCircumference = 2 * Math.PI * 2;
    expect(result.circumference).toBeCloseTo(expectedCircumference, 1);
  });

  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    const result = circle(3);
    const expectedArea = Math.PI * 3 * 3;
    const expectedCircumference = 2 * Math.PI * 3;
  
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('radius', 3);
    expect(result).toHaveProperty('area', expectedArea);
    expect(result).toHaveProperty('circumference', expectedCircumference);
  });

});




