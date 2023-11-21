/* 
1.Utilizando 1 matriz e 1 vetor de objetos e um menu de opções, faça um programa que crie funções para:
  
1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, e para cada carro, informar em 
uma matriz a nota do carro para cada uma das 5 avaliações que ele recebe da empresa Guia Quatro Rodas 
da Editora Abril.
  
2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro
  
3) calcular e mostrar o modelo do carro com menor nota em cada avaliação

4) calcule e mostre qual das cinco avaliações teve menor média 
*/


function cadastraCarros(matriz) {
    for (let i = 0; i < 4; i++) {
      let carro = {
        marca: prompt("Informe a marca do carro"),
        modelo: prompt("Informe o modelo do carro"),
        ano: parseInt(prompt("Informe o ano do carro")),
        valor: parseFloat(prompt("Informe o valor do carro")),
        nota1: parseInt(prompt("Informe a nota da 1ª avaliação")),
        nota2: parseInt(prompt("Informe a nota da 2ª avaliação")),
        nota3: parseInt(prompt("Informe a nota da 3ª avaliação")),
        nota4: parseInt(prompt("Informe a nota da 4ª avaliação")),
        nota5: parseInt(prompt("Informe a nota da 5ª avaliação"))
      };
      matriz.push(carro);
      console.log(`Carro inserido com sucesso: ${carro.marca} ${carro.modelo} - Ano: ${carro.ano} - Valor: ${carro.valor}`);
    }
  }
  
  function calculaMediaNotas(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      let somaNotas = 0;
      for (let j = 1; j <= 5; j++) {
        somaNotas += matriz[i]["nota" + j];
      }
      let mediaNotas = somaNotas / 5;
      console.log(`Média de notas do carro ${matriz[i].marca} ${matriz[i].modelo}: ${mediaNotas}`);
    }
  }
  
  function modeloMenorNota(matriz) {
    for (let i = 0; i < 5; i++) {
      let menorNota = matriz[0]["nota" + (i + 1)];
      let modeloMenorNota = matriz[0].modelo;
      for (let j = 1; j < matriz.length; j++) {
        if (matriz[j]["nota" + (i + 1)] < menorNota) {
          menorNota = matriz[j]["nota" + (i + 1)];
          modeloMenorNota = matriz[j].modelo;
        }
      }
      console.log(`Menor nota na ${i + 1}ª avaliação: ${menorNota} - ${modeloMenorNota}`);
    }
  }
  
  function menorMedia(matriz) {
    let menorMedia = matriz[0].nota1;
    let avaliacaoMenorMedia = 1;
    for (let i = 1; i < matriz.length; i++) {
      let somaNotas = 0;
      for (let j = 1; j <= 5; j++) {
        somaNotas += matriz[i]["nota" + j];
      }
      let mediaNotas = somaNotas / 5;
      if (mediaNotas < menorMedia) {
        menorMedia = mediaNotas;
        avaliacaoMenorMedia = i + 1;
      }
    }
    console.log(`Avaliação com menor média: ${avaliacaoMenorMedia} - Média: ${menorMedia}`);
  }
  
  function principal() {
    let matriz = [];
    cadastraCarros(matriz);
    calculaMediaNotas(matriz);
    modeloMenorNota(matriz);
    menorMedia(matriz);
  }
  
  principal();
  
  