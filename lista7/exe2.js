/* 2. Crie um programa que preencha uma matriz 2 x 4 com números inteiros, calcule e mostre:

- a quantidade de elementos entre 12 e 20 em cada linha;
- a média dos elementos pares da matriz */

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

function lerMatriz(matriz){
    for(let i=0;i<2;i++){
        matriz[i] = [] // inicializa a linha da matriz antes de adicionar elementos
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt((Math.random()*20)+1) // gera número de 1 a 20
        }
    }
    return matriz // retorna a matriz modificada
}

function calculaMediaPares(matriz){
    let soma = 0
    let qtde = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if (matriz[i][j] % 2 == 0){
                soma = soma + matriz[i][j]
                qtde++
            }
        }
    }
    if (qtde != 0){
        console.log(`Média dos números pares ${soma/qtde}`)
    }
    else {
        console.log(`Não existem valores pares`)
    }
}

function principal(){
    let matriz = []
    lerMatriz(matriz)
    calcula1220(matriz)
    calculaMediaPares(matriz)
    console.log(matriz)
}
principal()