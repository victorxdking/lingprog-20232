function exe1() {
    // recupera os dados do html
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calculo da média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    // verifica status do aluno
    let status
    if(media >= 7){
        status = "Aprovado"
    }
    else{
        status = "Reprovado"
    }
    // envia o resultado para o html
    document.getElementById("resultado").innerHTML = 
    `Média do aluno: ${media.toFixed(2)} - ${status}` 

}
function exe2() {
    // recupera os dados do html
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calculo da média
    let media = (nota1 + nota2) / 2
    let status
    if (media >= 0 && media < 3) {
        status = "Reprovado"
    }
    else if (media >= 3 &&  media < 7) {
        status = "Exame"
    }
    else if (media >= 7 && media <= 10) {
        status = "Aprovado"        
    }
    else{
        status = "Dados inválidos"
    }
    // envia o resultado para o html
    document.getElementById("resultado").innerHTML = 
    `Média do aluno: ${media.toFixed(2)} - ${status}`
}
function exe3() {
    // recupera os dados do html
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // calcula o menor número
    if (nro1 < nro2){   
        document.getElementById("resultado").innerHTML = 
        `O menor número é ${nro1}`   
    }
    else if (nro1 > nro2) {
        document.getElementById("resultado").innerHTML = 
        `O menor número é ${nro2}`
    }
    else{
        document.getElementById("resultado").innerHTML = 
        `Os números são iguais`
    }
}
function exe4() {
    // recupera os dados do html
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    // calculo do maior número
    let maiorNumero
    if (nro1 >= nro2 && nro1 >= nro3) {
        maiorNumero = nro1
    }
    else if (nro2 >= nro1 && nro2 >= nro3) {
        maiorNumero = nro2
    }
    else if (nro3 >= nro1 && nro3 >= nro2) {
        maiorNumero = nro3
    }
    // exibe o resultado
    document.getElementById("resultado").innerHTML = 
    `O maior número é ${maiorNumero}`
}
function exe5() {
    // recupera os dados do html
    let escolha = Number(document.getElementById("opcao").value);
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value); // Corrigido de nro1
    let resultado = null;

    switch (escolha) {
        case 1:
            resultado = (nro1 + nro2) / 2;
            break;
        case 2:
            resultado = Math.abs(nro1 - nro2);
            break;
        case 3:
            resultado = nro1 * nro2;
            break;
        case 4:
            if (nro2 !== 0) {
                resultado = nro1 / nro2;
            } else {
                document.getElementById("resultado").innerHTML = 
                "Divisão por zero não pode"
            }
            break;
        default: document.getElementById("resultado").innerHTML = 
        'Operação inválida'
    }

    if (resultado != null) {
        document.getElementById("resultado").innerHTML = 
        `RESULTADO = ${resultado}`
    }
}
function exe6() {
    let escolha = document.getElementById("opcao").value
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let resultado = null
    
    switch (escolha) {
        case 'a':
            resultado = Math.pow(nro1, nro2);
            break;
        case 'b':
            resultado = Math.sqrt(nro1) + '  ' + Math.sqrt(nro2);
            break;
        case 'c':
            resultado = Math.cbrt(nro1) + '  ' + Math.cbrt(nro2);
            break;
        default:
            document.getElementById("resultado").innerHTML = 'Operação inválida';
            return; // Adicione um retorno aqui para sair da função em caso de operação inválida
    }
    
    document.getElementById("resultado").innerHTML = `RESULTADO = ${resultado}`;
} 
function exe7() {
    // recupera os dados do html
    let salario = Number(document.getElementById("salario").value)
    // calculo do aumento
    if (salario < 500) {
        salario += salario * 0.30
        document.getElementById("resultado").innerHTML = 
        `O novo salário é R$ ${salario.toFixed(2)}`
    }
    else {
        document.getElementById("resultado").innerHTML = 
        "Você não tem direito ao aumento"
    }
}
function exe8() {
    let salario = Number(document.getElementById("salario").value)
    // calcula do aumento
    if (salario >= 0 && salario <= 300) {
        salario += salario * 0.35
    }
    else if (salario > 300){
        salario += salario * 0.15
    }
    else{
        document.getElementById("resultado").innerHTML = 
        "Você digitou algo errado" // caso digite valores negativos
    }
    if (salario > 0) {
        document.getElementById("resultado").innerHTML = 
        `O novo salário é R$ ${salario.toFixed(2)}`  
    }  
}   
function exe9() {
    let saldo = Number(document.getElementById("saldo").value)
    let credito = null
    // calculo credito
    if (saldo > 0 && saldo <= 200) {
        credito = saldo * 0.10
    }
    else if (saldo > 200 && saldo <= 300) {
        credito = saldo * 0.20
    }
    else if (saldo > 300 && saldo <= 400) {
        credito = saldo * 0.25
    }
    else if (saldo > 400) {
        credito = saldo * 0.30
    }
    // mostra o resultado no html
    if (saldo > 0) {
        document.getElementById("resultado").innerHTML = 
        `Saldo Médio = R$ ${saldo.toFixed(2)} <br> 
        Crédito liberado = R$ ${credito.toFixed(2)}`
    }
}
function exe10() {
   let custo = Number(document.getElementById("custo").value)
   let distribuidor = null
   let imposto = null
   // calculo do preço do carro para o consumidor
   if (custo > 0 && custo <= 12000) {
        distribuidor = custo * 0.05
        imposto = 0
    }
    else if (custo > 12000 && custo <= 25000) {
    distribuidor = custo * 0.10
        imposto = custo * 0.15
    }
    else if (custo > 25000) {
        distribuidor = custo * 0.15
        imposto = custo * 0.20
    }
    let precoFinal = custo + distribuidor + imposto
    document.getElementById("resultado").innerHTML = 
    `Preço final = R$ ${precoFinal.toFixed(2)}`
}
function exe11() {
    // coleta os dados no html
    let salarioAtual = Number(document.getElementById("salarioAtual").value)
    // calcula o valor do aumento
    if (salarioAtual > 0 && salarioAtual <= 300) {
        aumento = salarioAtual * 0.15
    }
    else if (salarioAtual > 300 && salarioAtual <= 600) {
        aumento = salarioAtual * 0.10
    }
    else if (salarioAtual > 600 && salarioAtual <= 900) {
        aumento = salarioAtual * 0.05
    }
    else if (salarioAtual > 900) {
        aumento = salarioAtual * 0
    }
    else {
        document.getElementById("resultado").innerHTML = 
        "Você digitou um valor inválido"
    }
    // novo salário
    let novoSalario = salarioAtual + aumento
    // envia o resultado para o html
    document.getElementById("resultado").innerHTML = 
    `Valor do aumento = R$ ${aumento} <br>
    Novo Salário = R$ ${novoSalario}`
}
function exe15() {
    // recupera os dados do html
    let opcao = Number(document.getElementById("opcao").value)
    let valor = Number(document.getElementById("valor").value)
    let resultado = null
    // Calcula o resultado com base na opção escolhida
    switch (opcao) {
        case 1:
            resultado = valor + (valor * 0.03)
            break;
        case 2:
            resultado = valor + (valor *0.04)
            break
        default: 
            alert("Escolha uma opção válida.") // Adiciona uma mensagem de erro
    }
    if (resultado !== null) {
        document.getElementById("resultado").innerHTML = 
        `Valor corrigido após 1 mês = R$ ${resultado.toFixed(2)}`
    }
}
function exe16() {
    let codigo = Number(document.getElementById("codigo").value);
    let precoAtual = Number(document.getElementById("precoAtual").value);
    let desconto // Inicialize desconto com 0 por padrão

    // Define um valor inicial para o elemento "resultado"
    document.getElementById("resultado").innerHTML = ""

    if (precoAtual <= 0 || codigo <= 0) {
        document.getElementById("resultado").innerHTML = "Valor inválido"
    } else if (precoAtual <= 30) {
        desconto = 0
    } else if (precoAtual <= 100) {
        desconto = precoAtual * 0.10
    } else {
        desconto = precoAtual * 0.15
    }

    // Calcula o novo preço
    let novoPreco = precoAtual - desconto

    // Exibe o resultado apenas se não for um valor inválido
    if (document.getElementById("resultado").innerHTML === "") {
        document.getElementById("resultado").innerHTML =
            `Código do produto ${codigo} <br> Preço com desconto R$ ${novoPreco.toFixed(2)}`
    }
}
function exe17() {
    // recupera os daddos do html
    let senha = Number(document.getElementById("senha").value)
    // verifica a senha
    if (senha == 4531) {
        document.getElementById("resultado").innerHTML = "Acesso liberado..."
        // abre a página da Fatec em uma nova guia
        setTimeout(function () {
            window.open("https://site.fatecfranca.edu.br/", "_blank")
        }, 2000) // 2 segundos de delay
    }
    else if (senha == ""){
        document.getElementById("resultado").innerHTML = "Digite a senha!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Senha incorreta, acesso negado!"
    }
}
function exe18() {
    // recupera os dados do html
    let idade = Number(document.getElementById("idade").value)
    // calcula maioridade
    if (idade >= 18) {
        document.getElementById("resultado").innerHTML = "Você atingiu a maioridade."
    }
    else if (idade == ""){
        document.getElementById("resultado").innerHTML = "Digite a sua idade!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Você não atingiu a maioridade."
    }
}
function exe19() {
    let escolha = Number(document.getElementById("opcao").value)
    let altura = Number(document.getElementById("altura").value)
    let pesoIdeal

    if (altura > 0) {
        switch (escolha) {
            case 1:
                pesoIdeal = (72.7 * altura) - 58 
                break
            case 2:
                pesoIdeal = (62.1 * altura) - 44.7 
                break
            default: document.getElementById("resultado").innerHTML =
                    'Escolha uma opção válida (1 ou 2)'
                    return // Encerrar a função aqui para evitar a exibição do pesoIdeal indefinido
        }
        document.getElementById("resultado").innerHTML = 
        `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`
    }
    else {
        document.getElementById("resultado").innerHTML = 
        'Digite uma altura válida'
    }
}
function exe20() {
    let idade = Number(document.getElementById("idade").value);
    let categoria = "";

    if (idade < 5) {
        categoria = "Idade inferior a 5 anos";
    } else if (idade >= 5 && idade <= 7) {
        categoria = "Infantil";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Juvenil";
    } else if (idade >= 11 && idade <= 15) {
        categoria = "Adolescente";
    } else if (idade >= 16 && idade <= 30) {
        categoria = "Adulto";
    } else {
        categoria = "Senior";
    }

    document.getElementById("resultado").innerHTML = `Categoria: ${categoria}`;
}
function exe21() {
    let preco = Number(document.getElementById("preco").value);
    let codigoOrigem = Number(document.getElementById("codigoOrigem").value);
    let procedencia = ""

    if (codigoOrigem === 1 || codigoOrigem === 2) {
        procedencia = "Sul"
    } else if (codigoOrigem === 3 || codigoOrigem === 4) {
        procedencia = "Leste"
    } else if (codigoOrigem === 5 || codigoOrigem === 6) {
        procedencia = "Oeste"
    } else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
        procedencia = "Centro-oeste"
    } else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
        procedencia = "Nordeste"
    } else if (codigoOrigem >= 21 && codigoOrigem <= 30) {
        procedencia = "Sudeste"
    } else {
        procedencia = "Código de Origem Inválido"
    }

    document.getElementById("resultado").innerHTML = `Procedência: ${procedencia}`
}
function exe22() {
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco = null
    // devolve o resultado
    if (idade >= 0 && idade < 20) {
        if (peso >= 0 && peso <= 60) {
            risco = 9
        } 
        else if (peso >= 60 && peso <= 90){
            risco = 8 
        }
        else if (peso > 90){
            risco = 7 
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"
        }
    }
    else if (idade >= 20 && idade <= 50) {
        if (peso >= 0 && peso <= 60) {
            risco = 6
        } 
        else if (peso >= 60 && peso <= 90){
            risco = 5 
        }
        else if (peso > 90){
            risco = 4 
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"
        }       
    }
    else if (idade > 50){
        if (peso >= 0 && peso <= 60) {
            risco = 6
        } 
        else if (peso >= 60 && peso <= 90){
            risco = 5 
        }
        else if (peso > 90){
            risco = 4 
        }
        else {
            document.getElementById("risco").innerHTML = "Peso negativo"
        }   
    }
    else {
        document.getElementById("risco").innerHTML = "Idade negativa"
    }
    if (risco != null) {
        document.getElementById("risco").innerHTML = 
        `O Risco é ${risco}`
    }
}
function exe23() {
        // recupera os dados do html
        let codigo = Number(document.getElementById("codigo").value)
        let qtde = Number(document.getElementById("qtde").value)
        // calcula preço unitário
        let precoUnitario = null
        if (codigo >= 1 && codigo <= 10){
            precoUnitario = 10
        }
        else if (codigo >= 11 && codigo <= 20){
            precoUnitario = 15
        }
        else if (codigo >= 21 && codigo <= 30){
            precoUnitario = 20
        }
        else if (codigo >= 31 && codigo <= 40){
            precoUnitario = 30
        }
        else {
            document.getElementById("resultado").innerHTML = "Código inválido"
        }
        // preco total
        let precoTotal
        if (precoTotal != null && qtde >= 0){
            precoTotal = qtde * precoUnitario
            // calcula o desconto
            let desconto
            if (precoTotal < 250){
                desconto = precoTotal * 5 / 100    
            }
            else if (precoTotal >= 250 && precoTotal <= 500){
                desconto = precoTotal * 10 / 100
            }
            else {
                desconto = precoTotal * 15 / 100
            }
            // calcula o preço final
            let precoFinal = precoTotal - desconto
            // exibe o resultado
            document.getElementById("resultado").innerHTML = `Preço Unitário  ${precoUnitario} 
            Preço Total ${precoTotal}`
            // exibe o resultado do desconto
            document.getElementById("desconto").innerHTML = `Desconto ${desconto}`
        }
        else {
            document.getElementById("resultado").innerHTML = "Código e/ou qtde inválido(s)"
        }
}
function exe24() {
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("catergoria").value)
    let situacao = Number(document.getElementById("situacao").value)
    if (preco < 0){
        document.getElementById("resultado").innerHTML = "Preço inválido"
    }
    else {
        // calcula aumento
        let aumento
        switch(categoria){
            case 1: if (preco <= 25){
                aumento = preco * 5 / 100
            }
            else {
                aumento = preco * 12 / 100
            }
            break
            case 2: if (preco <= 25){
                aumento = preco * 8 / 100
            }
            else {
                aumento = preco * 15 / 100
            }
            break
            case 3: if (preco <= 25){
                aumento = preco * 10 / 100
            }
            else {
                aumento = preco * 18 / 100
            }
            break
        }
        // calcula imposto
        let imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = preco * 5 / 100
        }
        else {
            imposto = preco * 8 / 100
        }
        // calcula novo preço
        let novoPreco = preco + aumento - imposto
        // calcula classificação
        let classificacao
        if (novoPreco < 50){
            classificacao = "Barato"
        }
        else if (novoPreco >= 50 && novoPreco < 120){
            classificacao = "Normal"
        }
        else {
            classificao = "Caro"
        }
        // resultado
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} Desconto 
        ${desconto} Novo Preço ${novoPreco} e Classificação ${classificacao}`
    }
}
function exe25() {
    let horasExtras = Number(document.getElementById("horasExtras").value)
    let horasFalta = Number(document.getElementById("horasFalta").value)
    let premio = 0

    let horasEmMinutos = horasExtras - (2 / 3 * horasFalta);

    if (horasEmMinutos > 2400) {
        premio = 500.00
    } else if (horasEmMinutos >= 1800 && horasEmMinutos <= 2400) {
        premio = 400.00
    } else if (horasEmMinutos >= 1200 && horasEmMinutos < 1800) {
        premio = 300.00
    } else if (horasEmMinutos >= 600 && horasEmMinutos < 1200) {
        premio = 200.00
    } else if (horasEmMinutos < 600) {
        premio = 100.00
    }

    document.getElementById("resultado").innerHTML = `Prêmio de Natal: R$ ${premio.toFixed(2)}`
}
