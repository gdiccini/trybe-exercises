let n = 5;

for(let i = 0; i < n; i += 1){
    let line = '';
    for(let j = 0; j <= i; j += 1){
        line += '*';
    }
    console.log(line)
}