const { sum } = require('./exAntigos');

describe('sum tests', () => {
  it('Comprova que a soma de 3 + 4 = 7', () => {
    expect(sum(3, 4)).toBe(7);
  });
});