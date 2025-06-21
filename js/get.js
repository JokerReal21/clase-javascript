//Consultas de tipo POST, GET, PUT, DELETE, PATCH
// Post sirve para mandar informacion
// Get sirve para obtener informacion
// Put sirve para actualizar informacion existente
// Patch sirve para actualizar informacion 
// Delete sirve para borrar

//Ahorita nos sirve aprender GET o POST. 
// Cuando usamos get nos van a dar una URL https://pokeapi.co/api/v2/
//Estas urls llevan parametros
//Por ejemplo: https://pokeapi.co/api/v2/pokemon/1


//Vamos a utilizar api de dbz la siguiente URL es la base: https://www.dragonball-api.com/api

//url para 10 personajes https://dragonball-api.com/api/characters?limit=10

let URL = 'https://dragonball-api.com/api/characters?limit=10';
let container = document.getElementById('container-api');

function getData(url){
    //Una promesa es una funcion que se ejecuta en el futuro, y tenemos que esperar a que se resuelva
    fetch(url)
        .then(response => {
            //Si la respuesta es correcta, entonces convertimos a json
            if (!response.ok) {
                console.log('Network response was not ok');
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let characters = data.items; 
            //Aqui tenemos los datos
            //Podemos hacer algo con los datos, por ejemplo, mostrarlos en la consola
            console.log(data);
            //Vamos a recorrer los datos y mostrarlos en el HTML
            //Metodos for, forEach, map tambien es muy util para recorrer arreglos
            //for y forEach son metodos de recorrer arreglos a traves de un ciclo
            characters.forEach((character, index) => {
                let card = document.createElement('div');
                card.classList.add('card', 'm-3');
                card.style.width = '18rem';
                card.innerHTML = `
                    <img src="${character.image}" class="cardimg" alt="Imagen de ${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">${character.race}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Genero: ${character.gender}</li>
                        <li class="list-group-item">Ki: ${character.ki}</li>
                        <li class="list-group-item">Grupo: ${character.affiliation}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Haz Click Aqui</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">One Piece</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Joder esto si es cine
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            //Si hay un error, lo mostramos en la consola
            console.error('There has been a problem with your fetch operation:', error);
        });    
}

//Llamamos a la funcion getData para que se ejecute cuando el dom este cargado
document.addEventListener('DOMContentLoaded', getData(URL));
//Otra forma de llamar a la funcion getData es con el evento load
// window.addEventListener('load', getData);

let value = document.getElementById('qtyValue');

//Vamos a escuchar el evento cuando cambie el valor del input
/* value.addEventListener('input', (e) => {
    console.log('camviamos de valor');
    let qty = e.target.value;
    let newURL = `https://dragonball-api.com/api/characters?limit=${qty}`;
    //Limpiamos el contenedor antes de agregar los nuevos personajes
    container.innerHTML = '';
    //Llamamos a la funcion getData con la nueva URL
    getData(newURL);
}); */

let btn = document.getElementById('btnConsulta');
//Vamos a escuchar el evento click del boton
btn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe
    let qty = value.value; // Obtenemos el valor del input
    let newURL = `https://dragonball-api.com/api/characters?limit=${qty}`;
    // Limpiamos el contenedor antes de agregar los nuevos personajes
    container.innerHTML = '';
    // Llamamos a la funcion getData con la nueva URL
    getData(newURL);
});
