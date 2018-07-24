let primeiro = document.querySelectorAll("input");
let button = document.querySelector("button");

button.onclick = validarForm;

    

function validarForm() {
    if (primeiro[0].value == "")
        alert("Primeiro nome")
    else if (primeiro[1].value == "")
        alert("Sobrenome")
    else if (primeiro[2].value == "")
        alert("Email")
    else {
        alert("Primeiro nome: " + primeiro[0].value + "\nSobrenome: " + primeiro[1].value + "\nEmail: " + primeiro[2].value)
    }
}