const contenedor = document.getElementById('container');
const btn = document.getElementById("btn_search");
const card = document.getElementById("movie_img");
const input = document.getElementById('input');
const btn_agregar = document.getElementById('agregar');
const inp_nombre = document.getElementById('inp_nombre');
const inp_precio = document.getElementById('inp_precio');
const inp_ingrediente = document.getElementById('inp_ingrediente');






localStorage.setItem('Pizzas', JSON.stringify(pizzas));
let Pizzas = JSON.parse(localStorage.getItem('Pizzas'))



const renderPizzas = (p) => {
    return `<div class="img_container">
    
    <img src= ${p.img} alt="" class = "img">
    </div>

<div class="movie_info">
    <div class="barra_anio"></div>
    <h1 class="titulo"> ${p.nombre}</h1>
    <h2 class="h2_info"> <b>Ingredientes:</b> ${p.ingredientes} </h2>
    <h2 class="h2_info">Precio: $${p.precio}</h2>
</div>`
}

const verPizza = () => {

    const lapizza = pizzas.find(pizza =>
        pizza.id == input.value);
    if (!lapizza) {
        alert('la pizza elegida no exite');
        input.value = ""
        const sin = {
            id: "",
            nombre: "",
            precio: "",
            img: "./img/EUT-eKUXsAM-zEM.jpg",
            ingredientes: ""
        }
        card.innerHTML = renderPizzas(sin);

        return
    }
    card.innerHTML = renderPizzas(lapizza);
    input.value = ""

}

const agregarPizza = () => {
    formulario.innerHTML = renderAdd()

}


const init = () => {

    btn.addEventListener('click', verPizza);
    btn_agregar.addEventListener('click', agregarPizza);





}

init();