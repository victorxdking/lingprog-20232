function exe1() {
    let contador2 = 1
    while (contador2 <= 5) {
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 1
        while (contador <= 3) {
            if (a > b) { // troca A com B
                let aux = a
                a = b
                b = aux
            }
            if (b > c) { // troca B com C
                let aux = b
                b = c
                c = aux
            }
            if (c > d) { // troca C com D
                let aux = c
                c = d
                d = aux
            }
            contador++
        } // fecha while
        console.log(`Ordem Crescente ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem Decrescente ${d}, ${c}, ${b}, ${a}`)
        contador2++
    } // fecha while
}
function exe2() {
    let qtde = 120
    const custo = 200
    let corpo = ''
    let lucro = 0
    let maiorLucro = 0
    let melhorQtde = 0
    let melhorPreco = 0
    for(let preco = 5; preco >= 1; preco = preco - 0.5){
        lucro = (preco * qtde) - custo
        if(lucro > maiorLucro){
            maiorLucro = lucro
            melhorPreco = preco
            melhorQtde = qtde
        }
        corpo = corpo + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${qtde} </td> <td> ${custo.toFixed(2)} </td> <td> ${lucro.toFixed(2)} </td> </tr>`
        qtde = qtde + 26
    }
    document.getElementById('corpo').innerHTML = corpo
    document.getElementById('maiorLucro').innerHTML = `Maior lucro = R$ ${maiorLucro.toFixed(2)}`
    document.getElementById('melhorQtde').innerHTML = `Melhor Quantidade = ${melhorQtde}`
    document.getElementById('melhorPreco').innerHTML = `Melhor Preço = R$ ${melhorPreco.toFixed(2)}`
}
function exe3() {
    let faixa1 = 0
    let faixa2 = 0
    let faixa3 = 0
    let faixa4 = 0
    let faixa5 = 0

    for(let i = 0; i < 8; i++) {
    const idade = parseInt(prompt(`Idade da ${i + 1}ª pessoa:`))

        if (idade <= 0) {
            alert('Idade inválida')
            i--
        }
        else if (idade <= 15) {
            faixa1++
        }
        else if (idade >= 16 && idade <= 30) {
            faixa2++
        }
        else if (idade >= 31 && idade <= 45) {
            faixa3++
        }
        else if (idade >= 46 && idade <= 60) {
            faixa4++
        }
        else {
            faixa5++
        }
    }
    document.getElementById('resultado').innerHTML = `
    Até 15 anos: ${faixa1} pessoas<br>
    De 16 a 30 anos: ${faixa2} pessoas<br>
    De 31 a 45 anos: ${faixa3} pessoas<br>
    De 46 a 60 anos: ${faixa4} pessoas<br>
    Acima de 60 anos: ${faixa5} pessoas<br>
    ${(faixa1 / 8) * 100}% das pessoas estão na 1ª faixa etária<br>
    ${(faixa5 / 8) * 100}% das pessoas estão na 5ª faixa etária`
}
function exe4() {
    let tabuada = Number(prompt('Informe o nº da tabuada'))
    for(i = 0; i < 11; i++){
        document.getElementById('resultado').innerHTML += `
        ${tabuada} x ${i} = ${tabuada * i}<br>`
    }
}
function exe5() {
    let corpo = ''
    for(let numero = 1; numero <= 10; numero++){
        corpo = corpo + `
        <tr> 
        <td> Tabuada </td> 
        <td> do </td> 
        <td> ${numero}</td>
        </tr>`
        for(let aux = 1; aux <= 10; aux++){
            corpo = corpo + `
            <tr> 
            <td> ${numero} </td> 
            <td> ${aux} </td> 
            <td> ${numero * aux}</td>
            </tr>`
        }
    }
    document.getElementById('corpo').innerHTML = corpo
}
function exe6() {
    let transacao
    let formaPagamento
    let totalAvista = 0
    let totalAprazo = 0
    
    for(i = 0; i < 15; i++){
    transacao = Number(prompt('Valor da transação R$'))
    formaPagamento = prompt('A = à vista\nP = à prazo')
        if(formaPagamento == "A"){
            totalAvista += transacao
        }
        else if(formaPagamento == "P"){
            totalAprazo += transacao
        }
        else{
            alert('Valor inválido')
            i--
        }
    }
    document.getElementById('resultado').innerHTML =
    `Total de transações à vista R$ ${totalAvista} <br>
     Total de transações à prazo R$ ${totalAprazo} <br>
     Total de transações efetuadas R$ ${totalAvista + totalAprazo}`
}
function exe7() {
    let idadeMaior50 = 0
    let contAltura = 0
    let contPeso = 0
    let alturaTotal = 0 

    let idade 
    let altura
    let peso
 
    for(i = 0; i < 5; i++){
     idade = parseInt(prompt('Digite a idade'))
     altura = Number(prompt('Digite a altura'))
     peso = Number(prompt('Digite o peso'))
     
     if (idade > 50) {
         idadeMaior50++
     }
     else if (idade >= 10 && idade <= 20) {
         contAltura++
         alturaTotal += altura
     }
     if (peso < 40) {
         contPeso++
     }
 }
     let mediaAltura = alturaTotal / contAltura
     let porcentagemPeso = (contPeso / 5) * 100
 
     document.getElementById('resultado').innerHTML =
     `Quantidade de pessoas com idade maior que 50 anos = ${idadeMaior50} <br>
     A média das alturas das pessoas com idade entre 10 e 20 anos = ${mediaAltura.toFixed(2)} <br>
     Porcentagem de pessoas com peso inferior a 40kg entre todas as pessoas analisadas = ${porcentagemPeso.toFixed(2)}%`
 }
 function exe8() {
    let idade
    let peso
    let altura
    let corOlho
    let corCabelo

    let pessoa50anos60peso = 0
    let contIdade = 0
    let idadeTotal = 0
    let contOlhoAzul = 0
    let pessoaCabeloReOlhoA = 0

    for(let i = 0; i < 6; i++) {
        idade = parseInt(prompt('Digite a idade'))
        peso = Number(prompt('Digite o peso'))
        altura = Number(prompt('Digite a altura'))
        
        // a quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg
        do {
            olhos = prompt('A = azul\nP = preto\nV = verde\nC = castanho').toUpperCase
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
        do {
            cabelos = prompt('P = preto\nC = castanho\nL = louro\nR = ruivo').toUpperCase
        }
        while (cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')
        if (idade > 50) {
            if (peso < 60) {
                pessoa50anos60peso++
            }
        }
        // a média das idades das pessoas com altura inferior a 1.50 m
        if (altura < 1.50) {
            contIdade++
            idadeTotal += idade
        }
        // a porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas
        if (corOlho == 'A') {
            contOlhoAzul++
        }
        // a quantidade de pessoas ruivas e que não possuem olhos azuis
        if (corCabelo == 'R') {
            if (corOlho != 'A') {
                pessoaCabeloReOlhoA++
            }
        }
    }

    let mediaIdade = idadeTotal / contIdade
    let porcentagemOlhoAzul = (contOlhoAzul / 6) * 100

    document.getElementById('resultado').innerHTML =
    `Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg = ${pessoa50anos60peso} <br>
    A média das idades das pessoas com altura inferior a 1.50m = ${mediaIdade.toFixed(2)} <br> 
    A porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas = ${porcentagemOlhoAzul.toFixed(2)} <br>
    A quantidade de pessoas ruivas e que não possuem olhos azuis = ${pessoaCabeloReOlhoA}`
 }
 function exe9() {
    let idade
    let peso
    let altura

    let totalIdade = 0
    let contIdade = 0
    let peso90Altura150 = 0
    let contAltura190 = 0
    let cont10a30 = 0


    for(let i = 0; i < 10; i++){
        idade = parseInt(prompt('Digite a idade'))
        peso = Number(prompt('Digite o peso'))
        altura = Number(prompt('Digite a altura'))
        // calcula a media da idade das pessoas
        totalIdade += idade

        // quantidade de pessoas com peso superior a 90kg e altura inferior a 1.50
        if (peso > 90 && altura < 1.50) {
            peso90Altura150++
        }
        // a porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1.90
        if (altura > 1.90) {
            contAltura190++
            if (idade >= 10 && idade <= 30) {
                cont10a30++
            }
        }
    }
    let porcentagem10a30 = (cont10a30 / contAltura190) * 100
    let mediaIdade = totalIdade / 10

    document.getElementById('resultado').innerHTML = 
    `A medida das idades das 10 pessoas é ${mediaIdade.toFixed(2)} <br>
    Quantidade de pessoas com peso superior a 90 kg e altura inferior a 1.50 m é ${peso90Altura150} <br>
    Porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1.90 m é ${porcentagem10a30.toFixed(2)}%`
}
function exe10() {
    let smPar = 0
    let smPrimos = 0
    let numerosPares = ''; // String para armazenar números pares
    let numerosPrimos = ''; // String para armazenar números primos

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt('Digite um número'))

        // Verifica se o número é par e adiciona à soma de pares
        if (!isNaN(numero) && numero % 2 === 0) {
            smPar += numero;
            numerosPares += numero + ' '; // Adiciona o número par à string
        }

        // Verifica se o número é primo e adiciona à soma de primos
        if (!isNaN(numero) && isPrimo(numero)) {
            smPrimos += numero;
            numerosPrimos += numero + ' '; // Adiciona o número primo à string
        }
    }

    document.getElementById('resultado').innerHTML =
        `Números pares: ${numerosPares} <br>
         A soma dos números pares é ${smPar} <br>
         Números primos: ${numerosPrimos} <br>
         A soma dos números primos é ${smPrimos}`
}
// Função para verificar se um número é primo
function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
function exe11() {
    // Coleta o valor do carro do usuário
    let valorCarro = parseFloat(prompt("Digite o valor do carro:"));

    if (isNaN(valorCarro) || valorCarro <= 0) {
        alert("Por favor, digite um valor válido para o carro.");
        return;
    }

    // Calcula o preço final com desconto de 20%
    let precoFinalAVista = valorCarro * 0.8;

    // Cria uma tabela HTML para mostrar os resultados
    let tabela = "<table border='1'>";
    tabela += "<tr><th>Quantidade de Parcelas</th><th>Percentual de Acréscimo</th><th>Valor da Parcela</th></tr>";

    // Define as opções de parcelas e seus percentuais de acréscimo
    let parcelas = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
    let acrescimos = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // Adicionando 30% para 60x

    // Calcula e adiciona cada linha da tabela
    for (let i = 0; i < parcelas.length; i++) {
        let quantidadeParcelas = parcelas[i];
        let percentualAcrescimo = acrescimos[i];
        let valorParcela = (precoFinalAVista * (1 + percentualAcrescimo / 100)) / quantidadeParcelas;

        tabela += `<tr><td>${quantidadeParcelas}</td><td>${percentualAcrescimo}%</td><td>R$ ${valorParcela.toFixed(2)}</td></tr>`;
    }

    tabela += "</table>";

    // Exibe a tabela no HTML
    document.getElementById("resultado").innerHTML = tabela;
}
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