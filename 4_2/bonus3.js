let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplier = [];

for (i = 0; i < numbers.length; i += 1){
    let j = i + 1;
    if(j >= numbers.length){
        multiplier.push(numbers[i] * 2);
    } else {
        multiplier.push(numbers[i] * numbers[j]);
    }
    
}

console.log(multiplier)