function biggestNumberIndex(array){
    let n = array.length;
    let biggestNumber = array[0];
    let biggestIndex = array.indexOf(biggestNumber);
    for (let index = 0; index < n; index += 1){
        if (array[index] > biggestNumber){
            biggestNumber = array[index];
            biggestIndex = array.indexOf(biggestNumber);
        }
    }
    return biggestIndex;
}
