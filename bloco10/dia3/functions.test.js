const functions = require('./functions');
jest.mock('./functions');

describe('Teste Função randomNumber', () => {
  it('Teste1' , () => {
    functions.randomNumber.mockReturnValueOnce(10);

    expect(functions.randomNumber()).toBe(10);
    expect(functions.randomNumber).toHaveBeenCalled();
  });

  it('Teste ex2', () => {
    functions.randomNumber.mockImplementationOnce((a, b) => a / b);

    expect(functions.randomNumber).toHaveBeenCalled();
    expect(functions.randomNumber(4, 2)).toBe(2);
    expect(functions.randomNumber).toHaveBeenCalledWith(4, 2);
  });

  it('Teste ex3', () => {
    const randomNumber = jest.spyOn(functions, 'randomNumber').mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(1, 2, 2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(1, 2, 2);

    randomNumber.mockReset();
    randomNumber.mockImplementation((number) => number * 2);

    expect(randomNumber(2)).toBe(4);

  });
});
