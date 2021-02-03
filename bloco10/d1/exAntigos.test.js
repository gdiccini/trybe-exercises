const { sum } = require('./exAntigos');

describe('sum tests', () => {
  it('Comprova que a soma de 3 + 4 = 7', () => {
    expect(sum(3, 4)).toBe(7);
  });

  it('Comprova que a soma de 5 + 10 != 14', () => {
    expect(sum(5, 10)).not.toBe(14);
  });

  it('Verifica entrada de strings', () => {
    expect(() => { sum('3', 5) }).toThrowError(new Error('parameters must be numbers'))
  });
});