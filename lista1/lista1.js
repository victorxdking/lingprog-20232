function exe1(){
    // recupera os dados do html
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    // calcula a subtração
    let subtracao = nro1 - nro2
    // envia o resultado para o html
    document.getElementById("subtracao").innerHTML = 
    `A subtração é ${subtracao}`
}
function exe2(){
    // recupera os dadaos do html
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    let nro3 = document.getElementById("nro3").value
    // calcula a multiplicação
    let multiplicao = nro1 * nro2 * nro3
    // envia o resultado para o html
    document.getElementById("multiplicacao").innerHTML = 
    `A multiplicação é ${multiplicao}`
}
function exe3(){
    // recupera os dados do html
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    // calcula a divisão
    let divisao = nro1 / nro2
    // envia o resultado para o html
    document.getElementById("divisao").innerHTML = 
    `A divisão é ${divisao}` 
}
function exe4(){
    // recupera os dados do html
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    // Define os pesos das notas
    let peso1 = 2
    let peso2 = 3
    // Calcula a média ponderada
    let mediaPonderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)
    // envia o resultado para o html
    document.getElementById("mediaPonderada").innerHTML = 
    `A média ponderada das notas é ${mediaPonderada}`
}
function exe5(){
    // recupera os dados do html
    let preco = document.getElementById("preco").value
    // calculo novo preço
    let novoPreco = preco * 0.9
    // envia o resulado para o html
    document.getElementById("novoPreco").innerHTML = 
    `O preço com 10% de desconto é R$ ${novoPreco.toFixed(2)}`
}
function exe6(){
    // recupera os dados do html
    let salarioFixo = parseFloat(document.getElementById("salarioFixo").value)
    let vendas = parseFloat(document.getElementById("vendas").value)
    // calculo de comissão
    let comissao = vendas * 0.04
    let salarioFinal = salarioFixo + comissao
    // envia o resulado para o html
    document.getElementById("comissao").innerHTML = `Comissão R$ ${comissao.toFixed(2)}`
    document.getElementById("salarioFinal").innerHTML = `Salário final R$ ${salarioFinal.toFixed(2)}`    
}
function exe7(){
    // recupera os dados do html
    let pesoAtual = parseFloat(document.getElementById("pesoAtual").value)
    // Obtém todos os elementos radio com o mesmo name
    let opcoesRadio = document.getElementsByName("grupoOpcoes");
    // Encontra o botão de rádio selecionado
    let opcaoSelecionada
    for (let i = 0; i < opcoesRadio.length; i++) {
        if (opcoesRadio[i].checked) {
            opcaoSelecionada = opcoesRadio[i].value
            break
        }
    }
    // Calcula o novo peso baseado na opção selecionada
    let novoPeso
    if (opcaoSelecionada === "engordar") {
        novoPeso = pesoAtual * 1.15
    } 
    else if (opcaoSelecionada === "emagrecer") {
        novoPeso = pesoAtual * 0.80
    }
    // Exibe o resultado
     document.getElementById("resultado").textContent = `Novo peso: ${novoPeso.toFixed(2)}`
}
function exe8(){
    // recupera os dados do html
    let pesoKg = parseFloat(document.getElementById("pesoKg").value)
    // converter o peso em gramas
    let pesoGramas = pesoKg * 1000
    // envia o resultado para o html
    document.getElementById("pesoGramas").innerHTML = `O peso em gramas é ${pesoGramas.toFixed(2)}`
}
function exe9(){
    // recupera os dados informados pelo usuário
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let altura = Number(document.getElementById("altura").value)
    // calcula área do trapézio
    let area = ((baseMenor + baseMaior) * altura) / 2
    // mostra ao usuário no HTML
    document.getElementById("area").innerHTML = `A área é ${area}`
}
function exe10(){
    // recupera os dados do html
    let lado1 = parseFloat(document.getElementById("lado1").value)
    let lado2 = parseFloat(document.getElementById("lado2").value)
    // calculo da área
    let area = lado1 * lado2
    // envia o resulado para o html
    document.getElementById("area").innerHTML = 
    `A área do quadrado é ${area.toFixed(2)}` 
}
function exe11() {
    // recupera os dados do html
    let diagonalMaior = document.getElementById("diagonalMaior").value
    let diagonalMenor = document.getElementById("diagonalMenor").value
    // calculo da área
    let area = (diagonalMaior * diagonalMenor) / 2
    // envia o resultado para o html
    document.getElementById("area").innerHTML = 
    `A área do losango é ${area.toFixed(2)}`
}
function exe12() {
    // recupera os dados do html
    let salarioMinimo = document.getElementById("salarioMinimo").value
    let salarioFuncionario = document.getElementById("salarioFuncionario").value
    // calcula quantos salários mínimos
    let resultado = salarioFuncionario / salarioMinimo
    // envia o resultado para o html
    document.getElementById("resultado").innerHTML = 
    `A quantidade de salários mínimos é de ${resultado.toFixed(2)}`
}
function exe13() {
    let tabuada = parseInt(document.getElementById("tabuada").value)
    let resultadoDiv = document.getElementById("resultado")
    
    resultadoDiv.innerHTML = "" // Limpa o conteúdo anterior

    for (let i = 0; i <= 10; i++) {
        resultadoDiv.innerHTML += `${tabuada} x ${i} = ${tabuada * i}<br>`
    }
}
function exe14() {
    
}
function exe20(){
    // cosseno(angulo) = cateto adjacente / hipotenusa
    // hipotenusa = cateto adjacente / cosseno(angulo)
    // recupera os dados do usuário
    let cAdjacente = Number(document.getElementById("cAdjacente").value)
    let angulo = Number(document.getElementById("angulo").value)

    // calcular a hipotenusa
    let radiano = angulo * (Math.PI / 180)
    let hipotenusa = cAdjacente / Math.cos(radiano)

    // mostra ao usuário
    document.getElementById("hipotenusa").innerHTML = `A medida da escada é ${hipotenusa}`


}