let n = 5;

for(let i = 0; i < n; i += 1){
    let line = '';
    for(let j = 1 + i; j < n ; j += 1){
        line += ' ';
    }
    for (let k = 0; k < i + 1 ; k += 1){
        line += '*'
    }
    console.log(line);
}   