function biggestName(array){
    let n = array.length;
    let name = array[0];
    for(let index = 1; index < n; index += 1){
        if (name.length < array[index].length){
            name = array[index];
        }
    }
    return name;
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(teste));