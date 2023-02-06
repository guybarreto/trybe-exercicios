// 1. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
/* Deseja-se juntá-las em apenas uma lista de objetos que fique da seguinte forma:
const listProducts = [{ Arroz: 2.99 },...] 
Tente criar uma função que resolva esse problema. */

const listProducts = products.map((product, index) => ({[product]: prices[index]}));

console.log(listProducts); // [ { Arroz: 2.99 }, { 'Feijão': 3.99 }, { Alface: 1.5 }, { Tomate: 2 } ]
