function exe1() {
    let contador2 = 1
    while (contador2 <= 5) {
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
    // organiza os valores em ordem crescente
    while (a > b || b > c || c > d) {
        if (a > b) {
            let aux = a
            a = b
            b = aux
        }
        if (b > c) {
            let aux = b
            b = c
            c = aux
        }
        if (c > d) {
            c = d
            d = aux
        }
    }
    // mostra os valores organizados
    console.log(`Ordem Crescente - ${a}, ${b}, ${c}, ${d}`)
    console.log(`Ordem Decrescente - ${d}, ${c}, ${b}, ${a}`)
    contador2++
    }
}
function exe2() {
    let precoIngresso = 5.0
    let quantidadeIngressos = 120
    const despesa = 200.0
    let lucroMaximo = 0.0
    let precoLucroMaximo = 0.0
    let quantidadeLucroMaximo = 0

    console.log("Preço do Ingresso | Quantidade de Ingressos | Lucro")

    while (precoIngresso >= 1.0) {
        const lucro = (precoIngresso * quantidadeIngressos) - despesa

        console.log(`${precoIngresso.toFixed(2)} | ${quantidadeIngressos} | R$${lucro.toFixed(2)}`)

        if (lucro > lucroMaximo) {
            lucroMaximo = lucro
            precoLucroMaximo = precoIngresso
            quantidadeLucroMaximo = quantidadeIngressos
        }

        precoIngresso -= 0.5
        quantidadeIngressos += 26
    }

    console.log(`\nLucro máximo esperado: R$${lucroMaximo.toFixed(2)}`)
    console.log(`Preço do ingresso para lucro máximo: R$${precoLucroMaximo.toFixed(2)}`)
    console.log(`Quantidade de ingressos vendidos para lucro máximo: ${quantidadeLucroMaximo}`)
}
