const fs = require('fs/promises');

function printData() {
  fs.readFile('./simpsons.json')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string))
  });
}

async function printById(id) {
  const simpson = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json')
      .then((fileContent) => {
        return JSON.parse(fileContent);
      })
      .then((simpsons) => simpsons);

    const simpson = data.find((curr) => parseInt(curr.id) === id);

    if (simpson === undefined) reject(new Error('Id inexistente.'));

    resolve(simpson);

  });

  return simpson;
}

function callPrintById(id) {
  printById(id).then((response) => console.log(response));
}

callPrintById(4);
