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

// Exe 2
function mediaPares(matriz){
    for(let i=0; i<2; i++){
        for(let i=0; i<2; i++){
            if(matriz[i][j] % 2 == 0){
                soma += matriz[i][j]
                qtde++
            }
        }
    }
    if (qtde !=0) {
        console.log(`Média dos números pares ${soma/qtde}`)  
    }
    else {
        console.log(`Não existem valores pares`)
    }
}


function principal(){
    let matriz = []
    calcula1220(matriz)
    mediaPares(matriz)
}
