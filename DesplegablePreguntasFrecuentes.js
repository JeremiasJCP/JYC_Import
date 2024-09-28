document.querySelectorAll('.iconoDesplegablePregunta').forEach(function(icono) {
    icono.addEventListener('click', function() {
        var respuesta = this.parentElement.nextElementSibling;
        respuesta.classList.toggle('mostrar');
        this.textContent = this.textContent === '+' ? '-' : '+';
    });
});