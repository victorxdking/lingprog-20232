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