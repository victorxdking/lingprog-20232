function cadastraFarmacia(farmacias) {
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }

    while (farmacias.some((item) => item.codigo === objeto.codigo)) {
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`));
    }

    farmacias.push(objeto);
    console.log('Farmácia cadastrada com sucesso');
}

function cadastraRemedio(farmacias, remedios) {
    let objeto = {
        codFarmacia: parseInt(prompt('Código da farmácia')),
        nome: prompt('Nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Qtde do remédio')),
        preco: parseFloat(prompt('Preço do remédio'))
    }

    while (!farmacias.some((item) => item.codigo === objeto.codFarmacia)) {
        objeto.codFarmacia = parseInt(prompt('Farmácia não existe. Informe novamente o código'));
    }

    let indice = remedios.findIndex((item) => item.codFarmacia === objeto.codFarmacia && item.nome === objeto.nome);

    if (indice === -1) {
        remedios.push(objeto);
        console.log('Remédio cadastrado com sucesso');
    } else {
        remedios[indice].qtde += objeto.qtde;
        console.log('Estoque do remédio atualizado com sucesso');
    }
}

function realizaVenda(remedios) {
    let venda = {
        farmacia: parseInt(prompt('Informe código da farmácia')),
        remedio: prompt('Informe nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Informe qtde para compra'))
    }

    if (remedios.some((item) => item.codFarmacia === venda.farmacia && item.nome === venda.remedio)) {
        let indice = remedios.findIndex((item) => item.codFarmacia === venda.farmacia && item.nome === venda.remedio);

        if (venda.qtde <= remedios[indice].qtde) {
            remedios[indice].qtde -= venda.qtde;
            console.log('Venda realizada com sucesso');
        } else {
            console.log('Estoque insuficiente');
        }
    } else {
        console.log('Farmácia ou remédio inexistente');
    }
}

function principal() {
    let farmacias = [];
    let remedios = [];

    let opcao;

    do {
        opcao = Number(prompt("Informe a opção escolhida: \n 1.Cadastrar Farmácia \n 2.Cadastrar Remédio \n 3.Realizar Venda \n 4.Sair"));

        switch (opcao) {
            case 1:
                cadastraFarmacia(farmacias);
                break;
            case 2:
                cadastraRemedio(farmacias, remedios);
                break;
            case 3:
                realizaVenda(remedios);
                break;
            case 4:
                alert('Programa será encerrado');
                break;
            default:
                alert('Opção inválida');
        }
    } while (opcao !== 4);
}

// Chamando a função principal para iniciar o programa
principal();
