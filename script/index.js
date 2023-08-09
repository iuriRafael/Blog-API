fetch ("https://api-rest-post-diegocandido.herokuapp.com/postagens/")
.then(response => response.json())
.then(postagens =>{
    console.log(postagens);


    //imagem
    document.querySelector(".imagem").src =`https://api-rest-post-diegocandido.herokuapp.com${postagens[0].thumbImage}`;
    document.querySelector(".imagem2").src = `https://api-rest-post-diegocandido.herokuapp.com${postagens[1].thumbImage}`;
    document.querySelector(".imagem3").src = `https://api-rest-post-diegocandido.herokuapp.com${postagens[2].thumbImage}`;
    document.querySelector(".imagem4").src = `https://api-rest-post-diegocandido.herokuapp.com${postagens[3].thumbImage}`;
    document.querySelector(".imagem5").src = `https://api-rest-post-diegocandido.herokuapp.com${postagens[4].thumbImage}`;
    document.querySelector(".imagem6").src = `https://api-rest-post-diegocandido.herokuapp.com${postagens[5].thumbImage}`;


    //titulo

    document.querySelector(".titulo").innerHTML = postagens[0].title;
    document.querySelector(".titulo1").innerHTML = postagens[1].title;
    document.querySelector(".titulo2").innerHTML = postagens[4].title;
    
    //data da postagem

    document.querySelector(".date").innerHTML = postagens[0].postDate;
    document.querySelector(".date1").innerHTML = postagens[1].postDate;
    document.querySelector(".date2").innerHTML = postagens[2].postDate;
    document.querySelector(".date3").innerHTML = postagens[3].postDate;
    document.querySelector(".date4").innerHTML = postagens[4].postDate;
    document.querySelector(".date5").innerHTML = postagens[5].postDate;
 
    //descrição das postagem
    document.querySelector(".texto1").innerHTML = postagens[0].description;
    document.querySelector(".texto2").innerHTML = postagens[1].description;
    document.querySelector(".texto3").innerHTML = postagens[2].description;
    document.querySelector(".texto4").innerHTML = postagens[3].description;
    document.querySelector(".texto5").innerHTML = postagens[4].description;
    document.querySelector(".texto6").innerHTML = postagens[5].description;


});






