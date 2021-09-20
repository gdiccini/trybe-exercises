async function makeMyNumber(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error("Informe apenas números"));

    const numero = ((a + b) * c);

    if (numero < 50) reject(new Error("Valor muito baixo"));

    resolve(numero);
  });
  return promise;
}

const n1 = Math.floor(Math.random() * 100 + 1);
const n2 = Math.floor(Math.random() * 100 + 1);
const n3 = Math.floor(Math.random() * 100 + 1);


async function callMakeMyNumber() {
  try {
    const result = await makeMyNumber(n1, n2, n3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

callMakeMyNumber();