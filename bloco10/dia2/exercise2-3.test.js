const { getUserName, findUserById } = require('./exercise2-3');

// describe('Testes getUserName', () => {
//   it('Verify if getUserName is a function', () => {
//     expect(typeof getUserName).toBe('function');
//   });

//   it('Returns a name who is in the data', done => {
//     expect(getUserName(4)).resolves.toBe('Mark');
//     done();
//   });

//   it('Returns erro when user is not found', done => {
//     expect(getUserName(10)).rejects.toEqual({ error: 'User with 10 not found.' });
//     done();
//   });
// });

describe('Testes utilizando getUserName async/await', () => {
  it('Verify user with id exists', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('Returns erro when user is not found', async () => {
    expect.assertions(1);
    await expect(getUserName(10)).rejects.toEqual({ error: 'User with 10 not found.' });
  });
});