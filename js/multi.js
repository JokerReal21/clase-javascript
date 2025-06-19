document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado");
});

function multiplicar(val1, val2) {
    let resultado = val1 * val2;
    return resultado;
}

document.getElementById("btnMultiplicar").addEventListener("click", function() {

    let input1 = document.getElementById("val1");
    let input2 = document.getElementById("val2");

    let val1 = parseFloat(input1.value);
    let val2 = parseFloat(input2.value);

    if(isNaN(val1) || isNaN(val2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    console.log(multiplicar(val1, val2));

    let resultado = multiplicar(val1, val2);

    let contenedorResultado = document.getElementById("resultado");

    contenedorResultado.innerHTML = `El resultado de la multiplicacion es: ${resultado}`;

});