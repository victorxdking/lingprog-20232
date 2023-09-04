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