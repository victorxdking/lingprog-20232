function exemplo(){

let objeto = {
    nome: prompt('Digite seu nome'),
    estoque: Number(prompt('Digite a quantidade de estoque')),
    classificacao: prompt('Digite a classificacao')
}
console.log(objeto)
console.log(objeto.nome)
console.log(objeto.estoque)
console.log(objeto.classificacao)

// outra forma de mostrar

let objeto2 = new Object()
objeto2.nome = prompt('Informe o nome'),
objeto2.estoque = Number(prompt('Digite a quantidade de estoque')),
objeto2.classifica = prompt('Digite a classificacao')
}