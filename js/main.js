//Cuando se cargue el dom mandar mensaje en consola
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado");
    document.getElementById("resultado").style.display = 'none';;
});

function sumar(val1, val2) {
    let resultado = val1 + val2;
    return resultado;
}

let ejemplo = 0;

document.getElementById("btnSuma").addEventListener("click", function() {

    let input1 = document.getElementById("val1");
    let input2 = document.getElementById("val2");

    let val1 = parseFloat(input1.value);
    let val2 = parseFloat(input2.value);

    if(isNaN(val1) || isNaN(val2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    //Ahora ya podemos usar la funcion sumar
    console.log(sumar(val1, val2));

    let resultado = sumar(val1, val2);

    let contenedorResultado = document.getElementById("resultado");

    //Vamos a mostrar el contenedor con el css display:block;
    contenedorResultado.style.display = "block";

    contenedorResultado.innerHTML = `El resultado de la suma es: ${resultado}`;
    ejemplo = 1;
    // contenedorResultado.innerHTML = "El resultado de la suma es: " + resultado ;
    //Es lo mismo queda a tu preferencia.
});

let hiddenGpt = document.getElementById("hiddenGpt");
document.getElementById('btngpt').style.display = 'none';
//Seleccionar select con id selectChatGPT
document.getElementById("selectChatGPT").addEventListener("change", function() {
    let select = document.getElementById("selectChatGPT");
    if (select.value === 'yes'){
        hiddenGpt.value = 'yes';
        document.getElementById('btngpt').style.display = 'block';
    }else {
        hiddenGpt.value = 'no';
        document.getElementById('btngpt').style.display = 'none';
    }
});