let readlineSync = require('readline-sync');

function velMed() {
  const dist = readlineSync.questionInt('Qual a distância em metros?');
  const temp = readlineSync.questionInt('Qual o tempo em segundos? ');
  const velocidade = (dist / temp);
  console.log(velocidade);
}

velMed();
