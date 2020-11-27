let salarioBruto = 3000.00;
let salarioBase;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto * 0.92;
} else if (salarioBruto <= 2594.92){
    salarioBase = salarioBruto * 0.91;
} else if (salarioBruto <= 5189.82){
    salarioBase = salarioBruto * 0.89;
} else {
    salarioBase = salarioBruto - 570.88;
}

let salarioLiquido;

if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
} else if (salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
} else if (salarioBase <= 3751.06){
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
} else if (salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
} else{
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869,36);
}

console.log('Salário Líquido: R$ ' + salarioLiquido);