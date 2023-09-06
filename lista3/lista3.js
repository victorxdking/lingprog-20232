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
    console.log("\nIdades:")
    console.log(`Até 15 anos: ${faixa1} pessoas`)
    console.log(`De 16 a 30 anos: ${faixa2} pessoas`)
    console.log(`De 31 a 45 anos: ${faixa3} pessoas`)
    console.log(`De 46 a 60 anos: ${faixa4} pessoas`)
    console.log(`Acima de 60 anos: ${faixa5} pessoas`)

    const porcentagemMenores15 = (faixa1 / 8) * 100
    const porcentagemMaiores60 = (faixa5 / 8) * 100

    console.log(`\nPorcentagem de menores de 15 anos: ${porcentagemMenores15.toFixed(2)}%`)
    console.log(`\nPorcentagem de maiores de 60 anos: ${porcentagemMaiores60.toFixed(2)}%\n`)
}

function exe5(){
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

  
