/**
 * Abre y cierra menú desplegable fijo.
 * 
 * @author Antonio Quesada Cuadrado
 */

document.addEventListener("DOMContentLoaded", function () {
    function abrirCerrarMenu() {
        let nav = document.getElementById("nav");

        //Con el toggle alterna el nombre de la clase active. 
        nav.classList.toggle("active");
    }

    document.getElementById("menu").addEventListener("click", abrirCerrarMenu);
})