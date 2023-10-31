/* 4. Faça um programa que receba:

- as notas de 15 alunos em cinco provas diferentes e armazene-as em uma matriz 15 x 5;
- os nomes dos 15 alunos e armazene-os em um vetor de 15 posições.

O programa deverá calcular e mostrar:

- para cada aluno, o nome, a média aritmética das cinco provas e a situação (aprovado, reprovado ou exame);
- a média da classe.
 */

function lerDados(vetor, matriz){
    for(let i=0;i<15;i++){
        vetor[i] = "aluno " + (i+1)
        matriz[i] = []
        for(let j=0;j<5;j++){
            matriz[i][j] = parseFloat((Math.random()*10).toFixed(1))
        }
    }
}

function calculaSituacao(vetor, matriz){
    for(let i=0; i<15; i++){
        let soma = 0
        for(let j=0; j<5; j++){
            soma = soma + matriz[i][j]
        }
        if (soma/5 >= 6){
            console.log(`${vetor[i]} foi aprovado com média ${(soma/5).toFixed(1)}`)
        }
        else if (soma/5 >= 3){
            console.log(`${vetor[i]} ficou de exame com média ${(soma/5).toFixed(1)}`)
        }
        else {
            console.log(`${vetor[i]} foi reprovado com média ${(soma/5).toFixed(1)}`)
        } 
    }
}

function calculaMediaFinal(matriz){
    let soma = 0
    for(let i=0;i<15;i++){
        for(let j=0;j<5;j++){
            soma = soma + matriz[i][j]
        }
    }
    console.log(`A média final da turma é ${(soma/75).toFixed(1)}`)
}

function principal(){
    let vetor = []
    let matriz = []
    lerDados(vetor, matriz)
    calculaSituacao(vetor, matriz)
    calculaMediaFinal(matriz)
    console.log(matriz)
}
principal()