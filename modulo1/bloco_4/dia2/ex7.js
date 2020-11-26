let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = 100000000;

for (let index = 0; index < numbers.length; index += 1){
    if (min > numbers[index]){
        min = numbers[index];
    }
}

console.log(min);