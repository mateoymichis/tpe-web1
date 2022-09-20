function stringAleatorio (caracteres) {
    let letras = "abcdefghijklmnopqrstuvwxyz0123456789";
    let string = "";
    for (let i=1; i<=caracteres; i++) {
        let index = Math.floor(Math.random()*letras.length);
        caracter = letras[index];
        string = string + caracter;
    }
    return string;
}

function generarCaptcha() {
    let captcha = document.getElementById('captcha');
    let contenido = stringAleatorio(6);
    captcha.value = contenido;
    captcha.innerHTML = contenido;
}

function validarCaptcha () {
    
    let captcha = document.getElementById('captcha').value;
    let captchaInput = document.getElementById('captcha-input').value;
    let captchaIncorrecto = document.getElementById('captcha-incorrecto');
    let captchaCorrecto = document.getElementById('captcha-correcto');
    
    
    if (captcha === captchaInput) {
        captchaIncorrecto.classList.remove("captcha-incorrecto-mostrar");
        captchaIncorrecto.classList.add("captcha-incorrecto");
        captchaCorrecto.classList.add("captcha-correcto-mostrar");
        captchaCorrecto.classList.remove("captcha-correcto");
        return true;
       
    } else {
        captchaIncorrecto.classList.remove("captcha-incorrecto");
        captchaIncorrecto.classList.add("captcha-incorrecto-mostrar");
        captchaCorrecto.classList.add("captcha-correcto");
        captchaCorrecto.classList.remove("captcha-correcto-mostrar");
        return false;
        
    }
}

function validarFormulario (evento) {
    evento.preventDefault();
    let enviado = document.getElementById('enviado');
    
    if(validarCaptcha()) {
        enviado.classList.remove("enviado");
        enviado.classList.add("enviado-ok");
        //form.submit();
    } else {
        enviado.classList.remove("enviado-ok");
        enviado.classList.add("enviado");
    }
}

generarCaptcha();
const form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);
 

