/* 3. Elabore um programa que preencha uma matriz 6 × 3, calcule e mostre: 

- o maior elemento da matriz e sua respectiva posição, ou seja, linha e coluna; 
- o menor elemento da matriz e sua respectiva posição, ou seja, linha e coluna. */

function lerMatriz(matriz){
    for(let i=0; i<6; i++){
        matriz[i] = []
        for(let j=0; j<3; j++){
            matriz[i][j] = parseInt((Math.random()*10))
        }
    }
}

function calculaMaior(matriz){
    let maior = matriz[0][0]
    let linhaMaior = 0
    let colunaMaior = 0
    for(let i=0; i<6; i++){
        for (let j=0; j<3; j++){
            if (matriz[i][j] > maior){
                maior = matriz[i][j]
                linhaMaior = i
                colunaMaior = j
            }
        }
    }
    console.log(`O Maior elemento é ${maior} na posição [${linhaMaior}][${colunaMaior}]`)
}

function calculaMenor(matriz){
    let menor = matriz[0][0]
    let linhaMenor = 0
    let colunaMenor = 0
    for(let i=0; i<6; i++){
        for (let j=0; j<3; j++){
            if (matriz[i][j] < menor){
                menor = matriz[i][j]
                linhaMenor = i
                colunaMenor = j
            }
        }
    }
    console.log(`O Menor elemento é ${menor} na posição [${linhaMenor}][${colunaMenor}]`)
}

function principal(){
    let matriz = []
    lerMatriz(matriz)
    calculaMaior(matriz)
    calculaMenor(matriz)
    console.log(matriz)
}
principal()