const inputTextArea = document.getElementById("input-text");


inputTextArea.addEventListener("input", function() {
    this.value = this.value.toLowerCase().replace(/[^a-z\s]/g, ''); //Expresión regular que ayuda a evaluar el mensaje
});

document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encrypt(inputText);
    document.getElementById("output-message").innerText = encryptedText || "Ningún mensaje fue encontrado";
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decrypt(inputText);
    document.getElementById("output-message").innerText = decryptedText || "Ningún mensaje fue encontrado";
});

function encrypt(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}
