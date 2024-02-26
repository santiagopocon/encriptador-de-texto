// Definimos variables para el input, output y copiado del mensaje encriptado por medio del portapapeles del programa.

let campoEntrada = document.querySelector("#textoIngreso");
let campoSalida = document.querySelector("#textoSalida");
let msnCopiado = document.querySelector("#mensajeCopiado");

// Matriz con los códigos por vocal, debe estar de este orden, de lo contario genera confusión entre las vocales a, i.
let listaCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]   

// Funciones para los botones del programa.
function btnEncriptar (){
    let mensajeEncriptar = encriptar(campoEntrada.value); // Llama a la función que estará encriptando el mensaje.
    campoSalida.value = mensajeEncriptar;
}

function btnDesencriptar(){
    let mensajeParaDesencriptar = desencriptar(campoEntrada.value); // Llama a la función que estará desencriptando el mensaje.
    campoSalida.value = mensajeParaDesencriptar;
}

function btncopiarTexto() {
    textoCopiado = campoSalida.value;
    navigator.clipboard.writeText(textoCopiado); // API del portapapeles.
    msnCopiado.innerHTML="Mensaje copiado al portapapeles";
    return textoCopiado;
}

// funcion para encriptar el mensaje.
function encriptar(mensajeEncriptado){
    for (let i = 0; i < listaCodigo.length; i++) {
        if (mensajeEncriptado.includes(listaCodigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(
                listaCodigo[i][0],
                listaCodigo[i][1]
            );
        }
    }
    return mensajeEncriptado;
}

// funcion para desencriptar mensaje
function desencriptar(mensajeDesencriptar){
    for (let i = 0; i < listaCodigo.length; i++) {
        if (mensajeDesencriptar.includes(listaCodigo[i][1])){
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(
                listaCodigo[i][1],
                listaCodigo[i][0]
            );
        }
    }

    return mensajeDesencriptar;
}