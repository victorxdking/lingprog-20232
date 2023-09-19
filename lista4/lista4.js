function calcularMediaEMaiorNota() {
    let vetor = []

    // for para entrada de dados
    for (let i = 0; i < 5; i++) {
        vetor.push(Number(prompt(`Informe nota ${i+1}`)))
    }

    // for para cálculo da média
    let soma = 0
    for (let i = 0; i < 5; i++) {
        soma += vetor[i]
    }

    // for para encontrar a maior nota
    let maior = vetor[0] // maior nota é a primeira
    for (let i = 1; i < 5; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    alert(`A média é ${soma / vetor.length}`)
    alert(`A maior nota é ${maior}`)
}
function calcularMaiorMenorNota() {
    let notas = []
    let nomes = []

    // for para entrada de dados
    for (let i = 0; i < 5; i++) {
        notas.push(Number(prompt(`Informe a ${i+1}ª nota `)))
        notas.push(Number(prompt(`Informe o ${i+1}º nome`)))
    }

    // for para encontrar a maior nota
    let maior = notas[0] // maior nota é a primeira
    for (let i = 1; i < 5; i++) {
        if (notas[i] > maior) {
            maior = notas[i]
        }
    }
    alert(`A maior nota é ${maior}`)
}
function calcularMaiorMenorNota() {
    let notas = []
    let nomes = []

    // for para entrada de dados
    for (let i = 0; i < 3; i++) {
        notas.push(Number(prompt(`Informe a ${i+1}ª nota `)))
        nomes.push(prompt(`Informe o ${i+1}º nome`))
    }

    // for para encontrar a maior nota
    let maior = notas[0] // maior nota é a primeira
    let maiorNome = nomes[0]
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > maior) {
            maior = notas[i]
            maiorNome = nomes[i]
        }
    }

    // for para encontrar a menor nota
    let menor = notas[0] // menor nota é a primeira
    let menorNome = nomes[notas.indexOf(menor)]
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] < menor) {
            menor = notas[i]
            menorNome = nomes[i]
        }
    }

    // Imprime a maior e a menor nota e o nome de quem tirou
    alert(`A maior nota foi de ${maior} com o nome de ${maiorNome}`)
    alert(`A menor nota foi de ${menor} com o nome de ${menorNome}`)
}
function exe1() {
    let numeros = []
    let numerosPares = []
    let numerosImpares = []
    let par = 0
    let impar = 0

    // entrada de dados
    for(let i=0;i<6;i++){
        numeros.push(Number(prompt(`Informe o ${i+1}º número inteiro`)))
    }

    // encontre os números pares e impares
    for(let i=0;i<numeros.length;i++){
        if(numeros[i] % 2 === 0){
            numerosPares.push(numeros[i])
            par++
        }
        else{
            numerosImpares.push(numeros[i])
            impar++
        }
    }

    // imprime os resultados
    alert(`Par = ${numerosPares} total de ${par} números\n
    Impar = ${numerosImpares} total de ${impar} números`)
}
function exe2() {
    let numeros = []
    let numerosMult2 = []
    let numerosMult3 = []
    let numerosMult2e3 = []

    // entrada de dados
    for(let i=0;i<7;i++){
        numeros.push(Number(prompt(`Informe o ${i+1}º número inteiro`)))
    }

    // encontre os números múltiplos de 2
    for(let i=0;i<7;i++){
        if(numeros[i] % 2 === 0 && numeros[i] % 3 === 0){
            numerosMult2e3.push(numeros[i])
        }
        else if(numeros[i] % 2 === 0){
            numerosMult2.push(numeros[i])
        }
        else if(numeros[i] % 3 === 0){
            numerosMult3.push(numeros[i])
        }
    }

    // imprime os resultados
    alert(`  Múltiplos de 2 = ${numerosMult2}\n
    Múltiplos de 3 = ${numerosMult3}\n
    Múltiplos de 2 e 3 = ${numerosMult2e3}`)
}
function exe3() {
    let codigos = []
    let estoque = []
    // entrada de dados
    for(let i=0;i<2;i++){
        codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
        estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
    }
    // compra por um cliente
    let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
    do {
        let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
        let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
        // verificando se o produto existe e se tem estoque
        let achou = false // produto não foi encontrado
        for(let i = 0; i<2; i++){
            if (codigos[i] == produto){ // econtrou o produto
                achou = true // achou o produto
                if(estoque[i] >= qtde){ // tem estoque
                    alert(`Venda realizada com sucessso`)
                    estoque[i] = estoque[i] - qtde // atualiza estoque
                }
                else {
                    alert(`Não tem estoque suficiente`)
                }
            }
        }
        if(!achou){ // não econtrou o produto
            alert(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))   
    }
    while(cliente !=0)
    // mostra o resultado
    for(let i=0;i<10;i++){
        console.log(`Produto ${codigos[i]} tem ${estoque[i]} unidades em estoque`)
    }
}
/*Faça um programa que preencha um vetor com quinze elementos inteiros e
 verifique a existência de elementos iguais a 30, mostrando as posições em que apareceram.*/
 function exe4() {
    let vetor = []
    // Preencha o vetor com quinze elementos inteiros
    for (let i = 0; i < 15; i++) {
        vetor.push(Number(prompt(`Informe ${i+1}º número inteiro`)))
        }
    // Verifique a existência de elementos iguais a 30 e mostre as posições
    let posicoes30 = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === 30) {
            posicoes30.push(i)
        }
    }
    if (posicoes30.length > 0) {
        alert(`Elemento 30 encontrado nas posições: ${posicoes30}`)
    } else {
        alert('Elemento 30 não encontrado no vetor')
    }
}
function exe6() {
    let vendas = []
    let percentuais = []
    let nomes = []
    // entrada de dados
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}`)))
    }
    // quanto vai receber de comissão
    let comissoes = []
    for(let i=0;i<10;i++){
        comissoes.push(vendas[i] * percentuais[i]/100)
        console.log(`${nomes[i]} vai receber ${comissoes[i]}`)
    }
    // total de vendas de todos os vendedores
    let total = 0
    for(let i=0;i<10;i++){
        total = total + vendas[i]
    }
    console.log(`Total de vendas ${total}`)
    // maior e menor valor a receber, e os nomes dos vendedores
    let maior = comissoes[0]
    let menor = comissoes[0]
    for(let i=1;i<10;i++){
        if(comissoes[i] > maior){
            maior = comissoes[i]
        }
        if(comissoes[i] < menor){
            menor = comissoes[i]
        }
    }
    console.log(`Maior comissão ${maior} do ${nomes[comissoes.indexOf(maior)]}`)
    console.log(`Maior comissão ${menor} do ${nomes[comissoes.indexOf(menor)]}`)
}
function exe4Prova() {
    let modelos = []
    let quantidades = []
    let classificacoes = []
    //entrada de dados
    for (let i = 0; i < 10; i++) {
        let modelo = prompt('Digite o nome do modelo de computador')
        let quantidade = parseInt(prompt('Digite a quantidade em estoque'))
        let classificacao = prompt('Digite a classificação (gamer, notebook, desktop)')
        //verifica se a quantidade em estoque é válida
        if (quantidade >= 0) {
            modelos.push(modelo)
            quantidades.push(quantidade)
            classificacoes.push(classificacao)
        } else {
            alert('Quantidade em estoque não pode ser negativa')
            i-- 
        }
    }
    let compras = 0
    let notebookMaisEstoque = ''
    let notebookMenosEstoque = ''
    let maiorEstoque = -1
    let menorEstoque = 9999999
    //recebe os dados de compra
    while (compras < 4) {
        let modeloCompra = prompt(`Digite o modelo do computador que deseja comprar ${modelos}`)
        let quantidadeCompra = parseInt(prompt('Digite a quantidade que deseja comprar'))
        //verifica se o modelo existe e a quantidade é suficiente
        let indiceModelo = modelos.indexOf(modeloCompra)
        if (indiceModelo !== -1 && quantidadeCompra <= quantidades[indiceModelo]) {
            quantidades[indiceModelo] -= quantidadeCompra 
            compras++
            //verifica se o modelo é do tipo notebook e atualiza o maior e menor estoque
            if (classificacoes[indiceModelo] === 'notebook') {
                if (quantidades[indiceModelo] > maiorEstoque) {
                    maiorEstoque = quantidades[indiceModelo]
                    notebookMaisEstoque = modeloCompra
                }
                if (quantidades[indiceModelo] < menorEstoque) {
                    menorEstoque = quantidades[indiceModelo]
                    notebookMenosEstoque = modeloCompra
                }
            }
            alert('Compra realizada')
        } else {
            alert('Compra cancelada\nModelo não encontrado ou quantidade insuficiente')
        }
    }
    //modelos de notebooks com maior e menor estoque
    alert(`Modelo de notebook com maior estoque =  ${notebookMaisEstoque}, ${maiorEstoque}`)
    alert(`Modelo de notebook com menor estoque = ${notebookMenosEstoque}, ${menorEstoque}`)
}

/* Analise as afirmações sobre as linguagens aprendidas até aqui no curso

I. HTML é uma linguagem de programação e de marcação de elementos no front-end
II. Java Script é uma linguagem de programação no front-end e precisa de um browser para interpretá-la
III. Um projeto que segue as melhores práticas de programação possui 3 arquivos separados por suas funcionalidades: 1 arquivo HTML, 1 arquivo CSS e um arquivo JavaScript, sendo que o HTML possui referência para os arquivos CSS e JS

Estão corretas

I, II e III

Apenas I e II

Apenas I e III

Apenas II e III

Analise as afirmações a respeito da linguagem JavaScript

I. Os operadores lógico &&, || e ! são respectivamente operadores e, ou e negação
II. Os comandos = e == são, respectivamente, de atribuição e comparação
III. Não é preciso definir o tipo de dado de uma variável em JavaScript, ela pode assumir diferentes tipos ao longo de sua execução

Estão corretas

I, II e III

Apenas I e II

Apenas I e III

Apenas II e III

Analise as afirmações a respeito das estruturas de repetição:
  
I. os comandos while e for possuem teste no início, enquanto que os comandos do ... while possuem teste no final
  
II. o comando do ... while é bom para verificar se entrada de dados do usuário está correta, colocando um loop que se encerra apenas quando o usuário informar valor correto.
  
III. o comando while precisa conter o comando de incremento(i++)/decremento(i--) para que em algum momento, o laço acabe. O comando for não precisa deste comando de incremento(i++)/decremento(i--).

Estão corretas:

I e II

I, II e III

I e III

II e III */