document.addEventListener("DOMContentLoaded", function () {
    const pasoElemento = document.getElementById("paso");

    pasoElemento.addEventListener("click", function () {
        // Detener la animación al hacer clic en el paso
        pasoElemento.style.animationPlayState = "paused";

        // Puedes reiniciar la animación después de un tiempo
        setTimeout(function () {
            pasoElemento.style.animationPlayState = "running";
        }, 2000); // 2000 milisegundos (2 segundos)
    });
});

