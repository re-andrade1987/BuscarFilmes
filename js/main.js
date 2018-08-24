document.getElementById("form").addEventListener("submit", pesquisarFilmes);

function pesquisarFilmes(e){
    e.preventDefault();
    var filmePesquisa = document.getElementById("pesquisar").value;
    buscarFilmes(filmePesquisa);
    
}

function buscarFilmes(filmePesquisa){
    var axios = require("axios")
    axios.get("http://www.omdbapi.com/?apikey=[yourkey]&s=" + filmePesquisa)
  .then(function (response) {
      console.log(filmes)
    var filmes = "response.data.Search" ;
    var mostrarFilmes = "";

    for(var i = 0; i < filmes.length; i++){

        mostrarFilmes +~ `
        <div class"col-sm-6 col-md-4">
            <div class"thumbnail">
                <img src"${filmes[i].Poster}" class="img-thumbnail">
                <h4>${filmes[i].Title}</h4>
                <p><a href="#" class="btn btn-primary" role="button">Ver Detalhes</a></p>
            </div>
         </div>

        `;

    }
    document.getElementById("movie").innerHTML = mostrarFilmes;
})      

.catch(function(error){
    console.log(error);
});
}
