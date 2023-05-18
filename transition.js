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
        overlay.style.transition = 'left 0.85s linear'; /* Cambio a linear y reducido en 15% */

        logo.style.display = "block";
        logo.style.animation = 'slideAndAppear 0.85s forwards';  // Aplicar la animación y reducido en 15%
        overlay.style.left = "0";

        setTimeout(function () {
            overlay.style.left = "100%";
        }, Math.round(2000 * 0.85)); // Reducido en 15%

        setTimeout(function () {
            logo.style.animation = 'slideAndDisappear 0.85s forwards';  // Aplicar la animación de desaparición y reducido en 15%
            setTimeout(function () {
                logo.style.display = "none";
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }, Math.round(1000 * 0.85));  // Reducido en 15%
        }, Math.round(1700 * 0.85));  // Reducido en 15%
    }

    iniciarTransicion();
}
