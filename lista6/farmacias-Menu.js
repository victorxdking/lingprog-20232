// cadastra as farmácias
function cadastraFarmacia(vetor) {
    let farmacias = []
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }
    while (farmacias.some( (item) => item.codigo == objeto.codigo )){
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
    }
    farmacias.push(objeto)
    console.log('Farmacia inserida com sucesso')
    return farmacias
}

// cadastra os remédios
function cadastraRemedio(vetor){
    let remedios = []
    let objeto = {
        codFarmacia: parseInt(prompt('Código da farmácia')),
        nome: prompt('Nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Qtde do remédio')),
        preco: parseFloat(prompt('Preço do remédio'))
    }
    for(let i=0; i > vetor.length; i++){
    
        while(!vetor[i].farmacias.some( (item) => item.codigo == objeto.codFarmacia)){
            objeto.codFarmacia = parseInt(prompt('Farmácia não existe. Informe novamente o código'))
        }
        let indice = remedios.findIndex( (item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
        if (indice == -1){ // remedio não existe
            remedios.push(objeto) // insere remédio
        }
        else { // já existe, atualiza estoque
            remedios[indice].qtde = remedios[indice].qtde + objeto.qtde
        }

    }
}

// 5 vendas
function cadastraVenda(vetor){
    let venda = {
        farmacia: parseInt(prompt('Informe código da farmácia')),
        remedio: prompt('Informe nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Informe qtde para compra'))
    }
    // verifica se existem - some retorna true ou false
    for(let i=0; i > vetor.length; i++){
        if (vetor[i].remedios.some( (item) =>
            (vetor[i].item.codFarmacia == venda.farmacia && item.remedio == venda.remedio) )){
                // recupera o índice do remédio - findIndex retorna o índice do vetor
                let indice = remedios.findIndex((item => 
                    item.nome == venda.remedio && item.codFarmacia == venda.remedio))
                if (venda.qtde <= remedios[indice].qtde){
                    // atualiza o estoque
                    remedios[indice].qtde = remedios[indice].qtde - venda.qtde
                    alert('Venda realizada com sucesso')
                    console.log('Venda realizada com sucesso')
                }
                else {
                    alert('Estoque insuficiente')
                    console.log('Estoque insuficiente')
                }
        }
        else {
                alert('Farmácia ou remédio inexistente')
                console.log('Farmácia ou remédio inexistente')
        }
    }
}

// menu
function principal(){
    let vetor = []
    let opcao
    do {
        opcao = Number(prompt("Informe a opção escolhida: \n 1.Cadastra farmacia \n 2.Cadastra remédio \n 3.Cadastra venda \n 4.Sair"))
        switch(opcao){
            case 1: cadastraFarmacia(vetor); break
            case 2: cadastraRemedio(vetor); break
            case 3: cadastraVenda(vetor); break
            case 4: alert('Programa será encerrado'); break
            default: alert('Opção inválida');
        }
    }
    while (opcao != 4)
}
principal()