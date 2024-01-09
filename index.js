document.addEventListener("DOMContentLoaded", function () {
    const formularioHogwarts = document.getElementById("formularioHogwarts");
    formularioHogwarts.addEventListener("submit", function (event) {
        event.preventDefault();
        // llenarObjetoEstudiante();
        mostrarInformacionEstudiante();
        mostrarBotonCena();
        
    

    });
});


function mostrarBotonCena() {
    const btnCena = document.getElementById("btnCena");
    btnCena.classList.remove("hidden");
    btnCena.addEventListener("click", function () {
                window.location.href = "cena.html";
    });
}


