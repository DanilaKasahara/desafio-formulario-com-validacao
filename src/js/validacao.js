// const inputText = document.querySelectorAll(".input");

// inputText.forEach(input => {
//     input.addEventListener('input', () => {
//         if (input.value.trim() === "") {
//             input.classList.add("campo-vazio");
//         } else{
//             input.classList.remove("campo-vazio");
//         }
//     });
// });

const inputText = document.querySelectorAll(".input");
const formulario = document.querySelector("form");

// Validação em tempo real
inputText.forEach(input => {
    input.addEventListener('input', () => {
        const mensagemErro = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("campo-vazio");
            mensagemErro.textContent = "*campo obrigatório";
            mensagemErro.classList.add("ativa");
        } else {
            input.classList.remove("campo-vazio");
            mensagemErro.textContent = "";
            mensagemErro.classList.remove("ativa");
        }
    });
});

// Validação ao enviar
formulario.addEventListener("submit", function (e) {
    let formularioValido = true;

    inputText.forEach(input => {
        const mensagemErro = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("campo-vazio");
            mensagemErro.textContent = "*campo obrigatório";
            mensagemErro.classList.add("ativa");
            formularioValido = false;
        } else {
            input.classList.remove("campo-vazio");
            mensagemErro.textContent = "";
            mensagemErro.classList.remove("ativa");
        }
    });

    if (!formularioValido) {
        e.preventDefault();
        document.querySelector(".campo-vazio").focus();
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
});
