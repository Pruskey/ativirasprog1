/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

//n sei fazer pagulho pra adicionar items a lista em js,
//então pfv só bota aqui vai

let listaCompras = ['queijo']
const last = listaCompras[listaCompras.length - 1];
if (last == 'leite'){
    console.log(listaCompras)
} else {
    listaCompras.push('leite');
    console.log(listaCompras)
}