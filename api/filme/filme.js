// função deve ser assincrona pois tem uma chamada sínconra dentro dela
async function api(){
    // recupera cep informado pelo usuário
    let title = document.getElementById('title').value
    // vamos chamar a api usando a função fetch do JS
    // await é sincrono, pois teremos que aguardar a resposta para continuar
    let resposta = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1f0653ad`)
    // os dados chegaram no formato string, vamos converter em JSON
    let dados = await resposta.json()
    // coloca o logradouro no formulário
    document.getElementById('title').value = dados.title
