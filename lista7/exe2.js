/* Crie um programa que preencha uma matriz 2 x 4 com números inteiros, calcule e mostre:
■a quantidade de elementos entre 12 e 20 em cada linha;
■a média dos elementos pares da matriz */

function calcula1220(matriz){
    let qtde
    for(let i=0; i<2; i++){
        qtde = 0
        for (let j=0; j<4; j++){
            if(matriz [i][j] >= 12 && matriz [i][j] <= 20){
                qtde++
            }
        }
        console.log(`A quantidade entre 12 e 20 na linha ${i} é ${qtde}`)
    }
}

function media(matriz){
    let aux
    for(let i=0; i<2; i++)
}