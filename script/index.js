fetch ("https://api-rest-post-diegocandido.herokuapp.com/postagens/").then(response => response.json())
.then(postagens =>{
    console.log(postagens);

    document.querySelector(".titulo").innerHTML = postagens[0].title;
    document.querySelector(".date").innerHTML = postagens[0].postDate;
    


    document.querySelector(".texto").innerHTML = postagens[0].description;
    document.querySelector(".texto1").innerHTML = postagens[1].description;
    document.querySelector(".texto2").innerHTML = postagens[2].description;
    document.querySelector(".texto3").innerHTML = postagens[3].description;
    document.querySelector(".texto4").innerHTML = postagens[4].description;

})




