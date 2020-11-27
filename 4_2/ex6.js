let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0){
       sum += 1;
    }
}

if (sum != 0){
    console.log(sum);
} else {
    console.log('Nenhum valor encontrado.')
}