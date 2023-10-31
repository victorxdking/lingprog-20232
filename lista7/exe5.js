/* 5. Elabore um programa que preencha uma matriz 12 x 4 com os valores das vendas de uma loja, em que cada linha representa um mês do ano e cada coluna representa uma semana do mês. O programa deverá calcular
e mostrar:

- o total vendido em cada mês do ano, mostrando o nome do mês por extenso;
- o total vendido em cada semana durante todo o ano;
- o total vendido pela loia no ano */

function lerMatriz(matriz, meses){
    for(let i=0; i<12;i++){
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt(Math.random()*(10000 - 1000 + 1) + 1000)
        }
    }
}
function calcularTotalMes(matriz, meses){
    for(let i=0; i<12;i++){
        let soma = 0
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
        console.log(`Total vendido em ${meses[i]} foi ${soma.toFixed(2)}`)
    }
}
function calcularTotalSemana(matriz){
    for(let j=0;j<4;j++){
        let soma = 0 
        for(let i=0;i<12;i++){
            soma = soma + matriz[i][j]
        }
        console.log(`A semana ${j+1} vendeu ${soma.toFixed(2)}`)
    }
}
function calculaTotalAno(matriz){
    let soma = 0
    for(let i=0; i<12;i++){
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
    }
    console.log(`Total vendido foi ${soma.toFixed(2)}`)
}

function principal(){
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let matriz = []
    lerMatriz(matriz, meses)
    calcularTotalMes(matriz, meses)
    calcularTotalSemana(matriz)
    calculaTotalAno(matriz)
}
principal()