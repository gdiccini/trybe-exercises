let n = 5;

for(let i = 1; i <= n; i += 1){
    let line = '';
    if(i % 2 != 0){
        if(i == 1){
            for(let j = 0; j <= i ; j += 1)
            line += ' ';
        }else if (i == 3){
            line += ' ';
        }
        for(let k = 0; k < i; k +=1){
            line += '*';
        }
    console.log(line);
    }
}