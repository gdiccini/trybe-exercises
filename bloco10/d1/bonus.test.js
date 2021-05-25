const { employeeInformation } = require('./bonus');

describe('Tests employeeInformation FN', () => {
  it('Testa se a função existe', () => {
    expect(typeof employeeInformation).toBe('function');
  });

  it('testa se é retornado corretamente o firstName', () => {
    const id = '8579-6';
    const info = 'firstName';
    const expected = 'Ana';

    expect(employeeInformation(id, info)).toBe(expected);
  });

  it('testa se é retornado corretamente o lastName', () => {
    const id = '8579-6';
    const info = 'lastName';
    const expected = 'Gates';

    expect(employeeInformation(id, info)).toBe(expected);
  });

  it('testa se é retornado corretamente o specialities', () => {
    const id = '8579-6';
    const info = 'specialities';
    const expected = ['UX', 'Design'];

    expect(employeeInformation(id, info)).toEqual(expected);
  });

  it('Testa se um erro é lançado quando utilizada a id errada', () => {
    const id = '1234567';

    expect(() => { employeeInformation(id) }).toThrow();
  });

  it('Testa se a mensagem de erro lançada está correta quando a id está errada', () => {
    const id = '1234567';

    expect(() => { employeeInformation(id) }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se um erro é lançado quando utilizada uma information que não existe', () => {
    const id = '4678-2';
    const information = 'sex';

    expect(() => { employeeInformation(id, information) }).toThrow();
  });

  it('Testa se a mensagem de erro lançada está correta quando a information não existe', () => {
    const id = '4678-2';
    const information = 'sex';

    expect(() => { employeeInformation(id) }).toThrowError(new Error('Informação indisponível'));
  });
});