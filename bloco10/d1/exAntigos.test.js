const { sum, myRemove } = require('./exAntigos');

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

describe('myRemove tests', () => {
  it('my remove recebe como argumento [1, 2, 3, 4] e 3 e retorna [1, 2, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4])
  })

  it('myremove([1, 2, 3, 4], 3) != [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4])
  })


});