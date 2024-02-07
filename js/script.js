document.getElementById("switchTextBtn").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var resultText = document.getElementById("resultText").value;

    document.getElementById("inputText").value = resultText;
    document.getElementById("resultText").value = "";
});

document.getElementById("encryptDecryptBtn").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;
    var resultText = "";

    // Verificar si hay texto en el campo y si todo el texto es minúsculas
    if (inputText.trim() !== "" && inputText === inputText.toLowerCase()) {
        for (var i = 0; i < inputText.length; i++) {
            resultText += String.fromCharCode(inputText.charCodeAt(i) ^ 7); // XOR encryption/decryption https://th.atguy.com/mycode/xor_js_encryption/
        }
        document.getElementById("resultText").value = resultText;
        document.getElementById("inputText").value = "";

        // Cambiar el texto del botón entre 'Encriptar' y 'Desencriptar'
        var button = document.getElementById("encryptDecryptBtn");
        if (button.textContent === "Encriptar") {
            button.textContent = "Desencriptar";
        } else {
            button.textContent = "Encriptar";
        }
    } else {
        alert("Por favor, ingresa texto en el campo izquiero y asegúrate de que esté en minúsculas.");
    }
});
