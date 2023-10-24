/* Faça um programa que preencha uma matriz 3 x 5 com números inteiros, calcule e mostre a quantidade de elementos entre 15 e 20. */

function lerMatriz(matriz){
    // 3 x 5 
    for(let i=0; i<3; i++){
        matriz[i] = [] 
        for(let j=0; j<5; j++){ // Correção aqui
            matriz[i][j] = parseInt((Math.random()*20)+1) // gera número de 1 a 20
        }
    }
}

function calcula15a20(matriz){
    let qtde = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<5; j++){
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20){
                qtde++
            }
        }
    }
    console.log(qtde)
}

function principal(){
    let matriz = []
    lerMatriz(matriz)
    calcula15a20(matriz)
    console.log(matriz)
}
principal()
