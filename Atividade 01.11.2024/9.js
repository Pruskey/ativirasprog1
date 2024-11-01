/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = [];

metasSemana.push('oi', 'oi2', 'oi3');

if (metasSemana[1] == 'exercício físico'){
    console.log(metasSemana);
} else {
    metasSemana[1] = 'praticar esportes';
    console.log(metasSemana);
}