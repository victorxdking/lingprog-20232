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
    const idade = parseInt(prompt(`Idade da pessoa ${i + 1}:`))

        if (idade <= 15) {
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
     if (idade >= 10 && idade <= 20) {
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

    for(i = 0; i < 2; i++) {
        idade = parseInt(prompt('Digite a idade'))
        peso = Number(prompt('Digite o peso'))
        altura = Number(prompt('Digite a altura'))
        corOlho = prompt('A = azul\nP = preto\nV = verde\nC = castanho')
        corCabelo = prompt('P = preto\nC = castanho\nL = louro\nR = ruivo')
        // a quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg
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
        if (corCabelo = 'R') {
            if (corOlho != 'A') {
                pessoaCabeloReOlhoA++
            }
        }
    }



    document.getElementById('resultado').innerHTML =
    `Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg = ${pessoa50anos60peso}`
 }
 