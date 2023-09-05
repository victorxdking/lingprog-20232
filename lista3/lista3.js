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
  
