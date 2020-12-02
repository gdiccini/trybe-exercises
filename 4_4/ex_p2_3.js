function lowestNumberIndex(array){
    let n = array.length;
    let lowestNumber = array[0];
    let lowestIndex = array.indexOf(lowestNumber);
    for (let index = 0; index < n; index += 1){
        if (array[index] < lowestNumber){
            lowestNumber = array[index];
            lowestIndex = array.indexOf(lowestNumber);
        }
    }
    return lowestIndex;
}