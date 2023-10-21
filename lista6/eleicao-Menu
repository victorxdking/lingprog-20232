function cadastraPartido(partidos) {
    for (let i = 0; i < 5; i++) {
        let objeto = {
            codigo: parseInt(prompt('Informe o código do partido')),
            nome: prompt('Informe o nome do partido'),
            sigla: prompt('Informe a sigla do partido'),
            presidente: prompt('Informe o presidente do partido'),
            qtde: parseInt(prompt('Informe a quantidade de candidatos'))
        }

        while (partidos.some((item) => item.codigo === objeto.codigo || objeto.codigo < 0)) {
            objeto.codigo = parseInt(prompt('Código já existe ou é menor que 0. Informe novo código'))
        }

        while (partidos.some((item) => item.sigla === objeto.sigla)) {
            objeto.sigla = prompt('Sigla já existe. Informe nova sigla')
        }

        partidos.push(objeto);
        alert('Partido cadastrado com sucesso');
    }
}

function cadastraPolitico(partidos, politicos) {
    for (let i = 0; i < 5; i++) {
        let objeto = {
            codPartido: parseInt(prompt('Informe código do partido do candidato')),
            nome: prompt('Informe nome do candidato'),
            qtde: 0,
            cargo: prompt('Informe cargo do candidato')
        }

        while (!partidos.some((item) => item.codigo === objeto.codPartido)) {
            objeto.codPartido = parseInt(prompt('Partido não encontrado, informe um novo'))
        }

        while (politicos.some((item) => item.nome === objeto.nome)) {
            objeto.nome = prompt('Nome já existe, informe outro nome')
        }

        politicos.push(objeto);
        alert('Político cadastrado com sucesso');
    }
}

function realizaVotacao(politicos) {
    for (let i = 0; i < 10; i++) {
        let votacao = {
            partido: parseInt(prompt('Informe código do partido')),
            candidato: prompt('Informe o nome do candidato')
        }

        let aux = politicos.find((item) => item.codPartido === votacao.partido && item.nome === votacao.candidato);

        if (aux !== undefined) {
            aux.qtde++;
            alert('Votação realizada com sucesso');
        } else {
            alert('Partido e/ou candidato não existem');
        }
    }
}

function candidatoMaisVotado(politicos) {
    let candidatoMaisVotado = politicos[0];

    for (let i = 1; i < politicos.length; i++) {
        if (politicos[i].qtde > candidatoMaisVotado.qtde) {
            candidatoMaisVotado = politicos[i];
        }
    }

    console.log(candidatoMaisVotado);
}

function eleicao() {
    let partidos = [];
    let politicos = [];

    let opcao;

    do {
        opcao = Number(prompt("Informe a opção escolhida: \n 1.Cadastrar Partido \n 2.Cadastrar Político \n 3.Realizar Votação \n 4.Candidato Mais Votado \n 5.Sair"));

        switch (opcao) {
            case 1:
                cadastraPartido(partidos);
                break;
            case 2:
                cadastraPolitico(partidos, politicos);
                break;
            case 3:
                realizaVotacao(politicos);
                break;
            case 4:
                candidatoMaisVotado(politicos);
                break;
            case 5:
                alert('Programa será encerrado');
                break;
            default:
                alert('Opção inválida');
        }
    } while (opcao !== 5);
}

// Chamando a função eleicao para iniciar o programa
eleicao();
