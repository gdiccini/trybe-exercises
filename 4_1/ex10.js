let custo = 200;
let venda = 350;

let custoTotal = custo * 1.2;
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0){
    console.log('Erro: insira um valor válido.')
} else{
    console.log('Valor de 1000 unidades: ' + (lucro * 1000));
}