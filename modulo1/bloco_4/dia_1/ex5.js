let a = 200;
let b = 90;
let c = 60;
let z = a + b + c;

if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number'){
    console.log('Erro: os valores devem ser numéricos.');
} else if (z == 180){
    console.log('true');
} else{
    console.log('false');
}