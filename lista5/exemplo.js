function prova(){
    let nomes = []
    let estoque = []
    let classificacao = []
    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do computador ${i+1}`))
        let auxEstoque
        do {
            auxEstoque = Number(prompt(`Informe o estoque do computador ${i+1}`))
        }
        while (auxEstoque < 0)
        estoque.push(auxEstoque)
        
        let auxCla
        do {
            auxCla = prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (auxCla != "GAMER" && auxCla != "NOTEBOOK" && auxCla != "DESKTOP")
        classificacao.push(auxCla)
    }
    let nomeCompra
    let qtdCompra
    let clasCompra 
    for(let i=0;i<4;i++){
        nomeCompra = prompt(`Informe o nome do computador que deseja comprar`)
        qtdCompra = Number(prompt(`Informe a quantidade que deseja comprar`))
        clasCompra = prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
            console.log(nomeCompra, nomes[j], clasCompra, classificacao[j])
            if (nomeCompra == nomes[j] && clasCompra == classificacao[j]){
                achou = true
                // verifica se tem estoque
                if (qtdCompra <= estoque[j]){
                    console.log(`Venda realizada com sucesso`)
                    estoque[j] = estoque[j] - qtdCompra
                }
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    let maiorEstoque = 0
    let menorEstoque = Infinity
    let achou = false
    for(let i=1;i<3;i++){
        if (classificacao[i] == "NOTEBOOK"){
            achou = true
            if (maiorEstoque > estoque[i]){
                maiorEstoque = estoque[i]
            }
            if (menorEstoque < estoque[i]){
                menorEstoque = estoque[i]
            }
        }
    }
    if (achou){
        console.log(nomes[estoque.indexOf(menorEstoque)])
        console.log(nomes[estoque.indexOf(maiorEstoque)])
    }
}


function exemplo(){
    // variáveis simples
   // let nome = prompt("Informe o nome")
   // let estoque = prompt("Informe o estoque")
   // let classificacao = prompt("Informe a classificao")
    // objeto
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao")
    }
    console.log(objeto)
    console.log(objeto.nome)
    console.log(objeto.estoque)
    console.log(objeto.classificacao)

    // outra forma
    let objeto2 = new Object()
    objeto2.nome =  prompt("Informe o nome"),
    objeto2.estoque = Number(prompt("Informe o estoque")),
    objeto2.classificacao = prompt("Informe a classificao")
}

function prova(){
    let vetor = []
    // entrada de dados    
    for(let i=0; i<2; i++){
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao")
    }
    vetor.push(objeto)
    }
    console.log(vetor[0])
}

function provaObjeto(){
    let vetor = []
    // entrada de dados    
    for(let i=0; i<3; i++){
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao").toUpperCase()
    }
    while (objeto.estoque < 0){
        objeto.estoque = Number(prompt("Informe o estoque positivo do computador"))
    }
    while (objeto.classificacao != 'GAMER' && objeto.classificacao != 'NOTEBOOK' && objeto.classificacao != 'DESKTOP'){
        objeto.classificacao = prompt("Informe a classificao do computador corretamente").toUpperCase()
    }
    vetor.push(objeto)
    }
    // compra
    for(let i=0;i<4;i++){
    let objetoCompra = {
        nomeCompra: prompt(`Informe o nome do computador que deseja comprar`),
        qtdCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
        clasCompra: prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
    }
    // verifica se o produto existe
    let achou = false
    for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
        if (objetoCompra.nomeCompra == vetor[j].nome && objetoCompra.clasCompra == vetor[j].classificacao){
            achou = true
            // verifica se tem estoque
            if (objetoCompra.qtdCompra <= vetor[j].estoque){
                console.log(`Venda realizada com sucesso`)
                vetor[j].estoque = vetor[j].estoque - objetoCompra.qtdCompra
            }
            else {
                console.log(`Não tem estoque suficiente`)
            }
        }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
}