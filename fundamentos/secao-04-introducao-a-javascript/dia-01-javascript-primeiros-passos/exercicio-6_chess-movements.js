// Exercício 06:
// 1. Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// 2. Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// 3. Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const piece = "Torre";

switch (piece.toLowerCase()) {
    case "king":
    case "rei":
        if (piece.toLowerCase() === "rei") {
            console.log("Rei -> Uma casa para qualquer direção.");
        } else {
            console.log("King -> One square to any direction.");
        }
        break;
    
    case "queen":
    case "rainha":
    case "dama":
        if (piece.toLowerCase() === "rainha" || piece === "dama") {
            console.log("Rainha / Dama -> Diagonal, horizontal e vertical.");
        } else {
            console.log("Queen -> Diagonal, horizontal and vertical.");
        }
        break;
    
    case "rook":
    case "torre":
        if (piece.toLowerCase() === "torre") {
            console.log("Torre -> Horizontal e vertical.");
        } else {
            console.log("Rook -> Horizontal and vertical.");
        }
        break;

    case "bishop":
    case "bispo":
        if (piece.toLowerCase() === "bispo") {
            console.log("Bispo -> Diagonal.");
        } else {
            console.log("Bishop -> Diagonal.");
        }
        break;

    case "knight":
    case "cavalo":
        if (piece.toLowerCase() === "cavalo") {
            console.log('Cavalo -> "L", pode pular sobre outras peças.');
        } else {
            console.log('Knight -> "L", can jump over other pieces.');
        }
        break;

    case "pawn":
    case "peão":
        if (piece.toLowerCase() === "peão") {
            console.log("Peão -> Uma casa para a frente. No primeiro movimento podem ser duas casas.");
        } else {
            console.log("Pawn -> One square forward. In the first move there can be two squares.");
        }
        break;

    default:
        console.log("Erro! Peça inválida. / Error! Invalid piece.");
        break;
}