// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función para validar si el input es un número
function esNumero(input) {
    return !isNaN(input) && isFinite(input) && typeof input === 'number';
}

// Función principal
function main() {
    let entrada;

    do {
        // Solicitar al usuario un número hasta que se ingrese un valor válido
        entrada = prompt("Ingrese un número para calcular su factorial:");

        if (esNumero(Number(entrada))) {
            // Calcular el factorial si el input es un número
            const numero = Number(entrada);
            const resultado = calcularFactorial(numero);

            // Mostrar el resultado por el DOM
            document.write(`<p>Factorial de ${numero} es: ${resultado}</p>`);
        } else {
            // Mostrar mensaje de error si el input no es un número
            alert("Por favor, ingrese un número válido.");
        }
    } while (!esNumero(Number(entrada))); // Repetir hasta que se ingrese un número válido
}

// Ejecutar la función principal al cargar la página
main();
