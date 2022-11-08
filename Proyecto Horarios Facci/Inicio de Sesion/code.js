const formulario = document.getElementById('caja-login');
const inputs = document.querySelectorAll('#caja-login input');



const expresiones = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // 8 caracteres, una letra mayuscula y minuscula.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const validarFormulario = (e) => {

    switch (e.target.name) {

        case "contrasena":

            if (expresiones.password.test(e.target.value)) {
                document.getElementById("p-error").innerHTML = "";

            } else {
                document.getElementById("p-error").innerHTML = "Contraseña no valida";
            }
            break;
        case "correo":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById("c-error").innerHTML = "";
            } else {
                document.getElementById("c-error").innerHTML = "Correo no válido";
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});