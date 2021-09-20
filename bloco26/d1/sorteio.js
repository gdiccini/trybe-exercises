let readlineSync = require('readline-sync');

function sorteio() {
  let playAgain = 'S';

  while(playAgain === 'S') {
    const userNumber = readlineSync.questionInt('Digite um número de 1 a 10: ');
    const randomNumber = Math.floor((Math.random() * 11));

    if ( userNumber === randomNumber) {
      console.log('Parabéns, número correto!');
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
    }

    playAgain = readlineSync.question('Deseja jogar novamente (S/N)?');
  }
}

sorteio();
