/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let vetor = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

//escolha um número
let numero = '1';

if (vetor.includes(numero)){
    console.log(vetor);
} else{
    console.log('não há este número');
}