document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const casaAsignada = document.querySelector("#casaAsignada");
    const btnIrAClases = document.querySelector("#btnIrAClases");
    cena.asignarCasa(estudianteHogwarts)
    mostrarInformacionEs()
});

// Asignar la casa al estudiante utilizando la función de hogwarts.js
cena.asignarCasa(estudianteHogwarts);

// Mostrar la información del estudiante en la página cena.html


// Mostrar la casa asignada
casaAsignada.innerText = `¡Felicidades! Has sido asignado a la casa de ${estudianteHogwarts.casa}`;

// Redireccionar a la página classDefContraArtOsc.html al hacer clic en el botón
btnIrAClases.addEventListener("click", function () {
    window.location.href = "classDefContraArtOsc.html";
});

