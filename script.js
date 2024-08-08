// Selección de elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const imagenContainer = document.querySelector(".imagen-container");

// Función para encriptar texto
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

    // Ocultar la imagen y el contenedor de texto
    imagenContainer.style.display = "none";
    document.querySelector(".texto-contenedor").style.display = "none";

    // Mostrar el botón "Copiar"
    document.querySelector(".copiar").style.display = "block";
}

// Función de encriptación
function encriptar(stringEncriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    matrizCodigo.forEach(([char, code]) => {
        if (stringEncriptada.includes(char)) {
            stringEncriptada = stringEncriptada.replaceAll(char, code);
        }
    });

    return stringEncriptada;
}

// Función para desencriptar texto
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";

    // Mostrar la imagen y el contenedor de texto si el mensaje está vacío
    if (!mensaje.value) {
        imagenContainer.style.display = "block";
        document.querySelector(".texto-contenedor").style.display = "block";
    }

    // Mostrar el botón "Copiar"
    document.querySelector(".copiar").style.display = "block";
}

// Función de desencriptación
function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    matrizCodigo.forEach(([char, code]) => {
        if (stringDesencriptada.includes(code)) {
            stringDesencriptada = stringDesencriptada.replaceAll(code, char);
        }
    });

    return stringDesencriptada;
}

// Función para copiar texto al portapapeles
function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para móviles

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            alert("Hubo un error al copiar el texto: ", err);
        });
}

