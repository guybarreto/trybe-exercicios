// Exercício 10:
// 1. Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//      * Atente que, sobre o custo do produto, incide um imposto de 20%.
//      * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//      * valorCustoTotal = valorCusto + impostoSobreOCusto;
//      * lucro = valorVenda - valorCustoTotal (lucro de um produto);

// 2. Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

const productCost = 35;
const productPrice = 80;

if (productCost < 0 || productPrice < 0) {
    console.log("Erro! Valor inválido.");
} else {
    const taxCost = productCost * 0.2;
    const totalCost = productCost + taxCost;
    const profit = productPrice - totalCost;

    console.log(profit);
}
