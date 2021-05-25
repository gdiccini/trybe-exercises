const { encode, decode } = require('./playground');

describe('Testes encode function', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('testa se as letras são convertidas em numeros', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('testa se outras letras não são convertidas', () => {
    expect(encode('abcou')).toBe('1bc45');
  });

  it('testa se a string retornada tem o mesmo tamanho do parâmetro passado', () => {
    const myString = 'abcderfdas';
    expect(encode(myString).length).toBe(10)
  });
});

describe('Testes decode function', () => {
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('testa se os números são convertidos em letras', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('testa se outros números não são convertidos', () => {
    expect(decode('16745')).toBe('a67ou');
  });

  it('testa se a string retornada tem o mesmo tamanho do parâmetro passado', () => {
    const myString = '12345sdfr341';
    expect(decode(myString).length).toBe(12);
  });
});