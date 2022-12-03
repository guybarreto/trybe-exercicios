// Exercício 01
// 1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina)
const myName = "Guy";

// 2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal
const birthCity = "Aracaju";

// 3. Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
let birthYear = 1986;

// 4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
console.log(myName);
console.log(birthCity);
console.log(birthYear);

// 5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
birthYear = 2030;
console.log(birthYear);

// 6. Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
birthCity = "Gramado"; // A mensagem de erro acontece porque não é possível reatribuir valores a constantes.
console.log(birthCity);