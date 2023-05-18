window.iniciarTransicion = function(callback) {
    const logo = document.getElementById("logo");
    const overlay = document.getElementById("overlay");

    function iniciarTransicion() {
        // Reiniciar la transición
        overlay.style.transition = 'none';
        overlay.style.left = '-100%';

        // Forzar un reflow (actualización del DOM)
        void overlay.offsetWidth;

        // Reestablecer la transición
        overlay.style.transition = 'left 1s linear'; /* Cambio a linear */

        logo.style.display = "block";
        logo.style.animation = 'slideAndAppear 1s forwards';  // Aplicar la animación
        overlay.style.left = "0";

        setTimeout(function () {
            overlay.style.left = "100%";
        }, 2000);

        setTimeout(function () {
            logo.style.animation = 'slideAndDisappear 1s forwards';  // Aplicar la animación de desaparición
            setTimeout(function () {
                logo.style.display = "none";
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }, 1000);  // Esperar a que la animación de desaparición termine para ocultar el logo
        }, 1700);  // Ajustar este tiempo para controlar cuándo comienza la animación de desaparición
    }

    iniciarTransicion();
}
