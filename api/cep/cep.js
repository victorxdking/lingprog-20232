// função deve ser assincrona pois tem uma chamada sínconra dentro dela
async function api(){
    // recupera cep informado pelo usuário
    let cep = document.getElementById('cep').value
    // vamos chamar a api usando a função fetch do JS
    // await é sincrono, pois teremos que aguardar a resposta para continuar
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    // os dados chegaram no formato string, vamos converter em JSON
    let dados = await resposta.json()
    // coloca o logradouro no formulário
    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
}