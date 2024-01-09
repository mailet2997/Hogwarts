document.addEventListener("DOMContentLoaded", function () {
    const infoEstudiante = document.getElementById("infoEstudiante");
    const btnGenerarPatronus = document.getElementById("btnGenerarPatronus");
    const animalPatronusEstudiante = document.getElementById("animalPatronusEstudiante");
    cena.asignarCasa(estudianteHogwarts);
    
    // Llamada a la función para obtener la información del estudiante desde hogwarts.js
    obtenerInfoEstudiante();
    
    // Mostrar la información del estudiante en la página classDefContraArtOsc.html
    mostrarInfoEstudiante();

    // Mostrar el botón para generar el Animal Patronus
    btnGenerarPatronus.classList.remove("hidden");

    btnGenerarPatronus.addEventListener("click", function () {
        // Llamada a la función para generar el Animal Patronus y asignarlo al estudianteHogwarts
        estudianteHogwarts.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();


        // Mostrar el Animal Patronus en la página
        animalPatronusEstudiante.innerText = `Animal Patronus: ${estudianteHogwarts.animalPatronus}`;
        obtenerInfoEstudiante();
        mostrarInfoEstudiante();
    });
    
    
    
});
console.log("animal",estudianteHogwarts.animalPatronus)
console.log("casa", estudianteHogwarts.casa)

function obtenerInfoEstudiante() {
   
}

function mostrarInfoEstudiante() {
    // Mostrar la información del estudiante en el contenedor
    infoEstudiante.innerHTML = `
        <h2>Información del Estudiante</h2>
        <p><strong>Nombre:</strong> ${estudianteHogwarts.nombre}</p>
        <p><strong>Edad:</strong> ${estudianteHogwarts.edad}</p>
        <p><strong>Linaje:</strong> ${estudianteHogwarts.linaje}</p>
        <p><strong>Casa:</strong> ${estudianteHogwarts.casa}</p>
        <p><strong>Animal Patronus:</strong> ${estudianteHogwarts.animalPatronus}</p>
        <p><strong>Cualidades:</strong> ${estudianteHogwarts.cualidades.join(", ")}</p>
        <!-- Otros campos del estudianteHogwarts -->
    `;

    // Otros campos del estudianteHogwarts

    // Mostrar el contenedor de información
    infoEstudiante.classList.remove("hidden");
}