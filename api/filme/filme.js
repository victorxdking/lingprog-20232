// função deve ser assíncrona pois tem uma chamada síncrona dentro dela
async function api() {
    // recupera título informado pelo usuário
    let title = document.getElementById('title').value;
    // vamos chamar a API usando a função fetch do JS
    // await é síncrono, pois teremos que aguardar a resposta para continuar
    let resposta = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=1f0653ad`);
    // os dados chegaram no formato string, vamos converter em JSON
    let dados = await resposta.json();

    // coloca os dados no formulário
    document.getElementById('title').value = dados.Title;
    document.getElementById('year').value = dados.Year;
    document.getElementById('genre').value = dados.Genre;
    document.getElementById('director').value = dados.Director;
    document.getElementById('actors').value = dados.Actors;
    document.getElementById('plot').value = dados.Plot;
    document.getElementById('imdbRating').value = dados.imdbRating;
    document.getElementById('poster').src = dados.Poster;
}