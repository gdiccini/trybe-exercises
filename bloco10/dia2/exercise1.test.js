// Ex1

const { expect } = require("@jest/globals");

const uppercase = (texto, giovani) => {
  giovani(texto.toUpperCase());
};

test('Testes upparcase function', () => {
  const fnUpper = (texto) => {
    expect(texto).toBe('TESTE1');
  }
  uppercase('teste1', fnUpper);
});