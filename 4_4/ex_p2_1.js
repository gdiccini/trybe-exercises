function verifyPalindrome(string){
    let n = string.length;

    let array1 = [];
    let array2 = [];

    let word2 = '';
    
    for (let index = 0; index < n; index += 1){
        word2 += string.charAt(n-1-index);
    }    

    if (word2 === string){
        return true;
    }

    return false
}

let word = 'aibofoia';
console.log(verifyPalindrome(word));