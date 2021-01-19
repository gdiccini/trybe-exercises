// // Ex1

// const testingScope = escopo => { 
//   if (escopo === true) { 
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(false);

// Ex2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.
// const ordenate = array => {
//   for (let index = 0; index < oddsAndEvens.length - 1; index += 1){
//     for (let index2 = index + 1; index2 < oddsAndEvens.length; index2 += 1) {
//       if (oddsAndEvens[index] > oddsAndEvens[index2]){
//         const a = oddsAndEvens[index];
//         const b = oddsAndEvens[index2];
//         oddsAndEvens[index] = b;
//         oddsAndEvens[index2] = a;
//       }
//     }
//   }
// }
// ordenate(oddsAndEvens);

// console.log(oddsAndEvens);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(oddsAndEvens.sort((a, b) => a - b));