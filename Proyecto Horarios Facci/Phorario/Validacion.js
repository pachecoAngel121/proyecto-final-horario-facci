document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Horario").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombred').value;
    if (nombre.length > 20 || !nombre.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    else{
        document.getElementById("n-error").innerHTML = "";
    }
    var carrera = document.getElementById('carrera').value;
    if (carrera==0) {
        document.getElementById("c-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("c-error").innerHTML = "";
    }
    var nivel = document.getElementById('nivel').value;
    if (nivel==0) {
        document.getElementById("nv-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("nv-error").innerHTML = "";
    }
    var paralelo = document.getElementById('paralelo').value;
    if (paralelo==0) {
        document.getElementById("p-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("p-error").innerHTML = "";
    }
    
    var asignatura = document.getElementById('asignatura').value;
    if (asignatura==0) {
        document.getElementById("a-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("a-error").innerHTML = "";
    }
    this.submit();
}