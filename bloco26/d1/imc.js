let readlineSync = require('readline-sync');

function calcIMC() {
  const weight = readlineSync.questionFloat('Digite seu peso(kg): ')
  const height = readlineSync.questionFloat('Digite sua altura(m): ')

  const imc = (weight / (Math.pow(height, 2))).toFixed(2);
  console.log(`O valor do IMC é: ${imc}`);

  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }
  if (imc <= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
    return;
  }
  if (imc <= 25 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return;
  }
  if (imc <= 30 && imc <= 34.9) {
    console.log('obesidade 1');
    return;
  }
  if (imc <= 35 && imc <= 39.9) {
    console.log('obesidade 2');
    return;
  }
  if (imc >= 40) {
    console.log('obesidade 3');
    return;
  }
}

calcIMC();
