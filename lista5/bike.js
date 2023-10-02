/* Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações como marca, modelo, quadro, aro, ano e preço. Após a entrada de dados, o programa deve calcular e exibir ao usuário:

1) a média de preço das bikes

2) qual a bike é mais antiga, deve-se considerar empates

3) quais as bikes são do marca Caloi

4) quantas bikes possuem aro 29

5) qual bike possui maior quadro, pode-se desconsiderar empates
*/

function bikes() {
    let vetor = []
    // entrada de dados    
    for(let i=0; i<2; i++){
    let objeto = {
        marca: prompt(`Informe a marca da ${i+1}ª bike `),
        modelo: prompt(`Informe o modelo da ${i+1}ª bike `),
        quadro: parseInt(prompt(`Informe o quadro da ${i+1}ª bike `)),
        aro: parseInt(prompt(`Informe o aro da ${i+1}ª bike `)),
        ano: parseInt(prompt(`Informe o ano da ${i+1}ª bike `)),
        preco: parseFloat(prompt(`Informe o preco da ${i+1}ª bike R$:`))
    }
    while (objeto.quadro < 0){
        objeto.quadro = Number(prompt('Informe o nº do quadro positivo'))
    }
    while (objeto.aro < 0){
        objeto.aro = Number(prompt('Informe o nº do aro positivo'))
    }
    while (objeto.ano < 0){
        objeto.ano = Number(prompt('Informe o ano positivo'))
    }
    while (objeto.preco < 0){
        objeto.preco = Number(prompt('Informe o preco positivo'))
    }
    vetor.push(objeto)
    console.log('Bike inserida com sucesso')
    }

    // média dos preços das bikes
    let soma = 0
    for(let i = 0; i<3; i++){
    soma = soma + vetor[i].preco
    }
    console.log(`Média de preços das bikes ${soma/vetor.length}`)

    // bike(s) mas antiga(s)
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1; i<3; i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] // zera o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`, maisAntiga)

    // bikes da marca Caloi
    let caloi = []
    for(let i=0; i<3; i++){
        if (vetor[i].marca == 'CALOI')
            caloi 
    }
}
