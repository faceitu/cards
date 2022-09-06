const contenedor = document.getElementById('render');



const renderMovies = (pelis) => {
    return `  
              <div class="movie_card">
                 <div class="movie_img">
                     <div class="img_container">
                         <div class="img" style = "background-image:url(${pelis.imagen})"</style> > </div>
                     </div>
                 </div>
              <div class="movie_info">
                 <div class="barra_anio"></div>
                 <h1 class="titulo"> ${pelis.titulo}</h1>
                 <h2 class="h2_info">Descripcion: ${pelis.descricion} </h2>
                 <h2 class="h2_info">Director: ${pelis.director}</h2>
                 <h2 class="h2_info">Año: ${pelis.anio}</h2>
              </div>
             </div> 
             
             `
}


const verMovies = () => {
    peliculas.map(pelis => {
        contenedor.innerHTML = renderMovies(pelis);
    }).join('')
}







const init = () => {
    verMovies();

}

init();