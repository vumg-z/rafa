window.iniciarTransicionInicio = function (callback) {
    const logo = document.getElementById("logo");
    const overlay = document.getElementById("overlay");
    const principal = document.getElementById("principal");

    // Reiniciar la transición
    overlay.style.transition = 'none';
    overlay.style.left = '-100%';

    // Forzar un reflow (actualización del DOM)
    void overlay.offsetWidth;

    // Reestablecer la transición
    overlay.style.transition = 'left 0.67s linear'; /* Cambio a linear y reducido en 33% */

    logo.style.display = "block";
    logo.style.animation = 'slideAndAppear 0.67s forwards';  // Aplicar la animación y reducido en 33%
    overlay.style.left = "0";

    setTimeout(function () {
        overlay.style.left = "100%";
    }, Math.round(2000 * 0.67));  // Reducido en 33%

    setTimeout(function () {
        logo.style.animation = 'slideAndDisappear 0.67s forwards';  // Aplicar la animación de desaparición y reducido en 33%
        setTimeout(function () {
            logo.style.display = "none";

            // Muestra los elementos uno a uno después de la transición
            setTimeout(function () {
                principal.style.opacity = '1';

                // Muestra el logo después de 500ms
                new Promise((resolve) => setTimeout(resolve, Math.round(500 * 0.67))).then(() => { // Reducido en 33%
                    const children = Array.from(principal.children);
                    const showChildren = (index = 0) => {
                        if (index < children.length) {
                            children[index].style.opacity = '1';

                            // Continúa con el siguiente hijo después de 500ms
                            new Promise((resolve) => setTimeout(resolve, Math.round(500 * 0.67))).then(() => { // Reducido en 33%
                                showChildren(index + 1);
                            });
                        } else {
                            // Llama al callback al final
                            if (callback) callback();
                        }
                    };

                    // Inicia mostrando los hijos
                    showChildren();
                });
            }, Math.round(100 * 0.67));  // Reducido en 33%

        }, Math.round(1000 * 0.67));  // Reducido en 33%

    }, Math.round(4000 * 0.67));  // Reducido en 33%
}
