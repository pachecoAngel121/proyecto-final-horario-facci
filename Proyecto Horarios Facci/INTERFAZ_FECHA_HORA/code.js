document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("Horario").addEventListener('submit', validarFormulario);

});
function validarFormulario(evento) {
    evento.preventDefault();
    var hora_inicio = document.getElementById('hora_inicio').value;

    var hora_fin = document.getElementById('hora_fin').value;

    if (hora_inicio < hora_fin) {

        document.getElementById("p-error").innerHTML = "Hora de fin no debe ser mayor que la hora de inicio";

        return;
    }
    else {
        
        document.getElementById("p-error").innerHTML = "";
    }
    this.submit();
}