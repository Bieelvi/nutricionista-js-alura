// // DOCUMENT É A ESTRUTURA HTML -> DOM
// document;

// // A FUNCAO QUERYSELECTRO PEGA UM TAG E DO HTML
// document.querySelector("h1");

// // O TEXTCONTENT PEGA O CONTEUDO TEXTO QUE TIVER DENTRO DA TAG BUSCADA
// document.querySelector("h1").textContent;

// // É POSSIVEL ATRIBUIR VALORES AO TEXTCONTENT MUDANDO O CONTEUDO DA TAG
// document.querySelector("h1").textContent = "Jorginho";

// // A FUNCAO QUERYSELECTOR BUSCA TAMBEM PELA CLASS OU ID CSS, QUE CASO É UMA BOA PRATICA 
// document.querySelector(".titulo").textContent = "classe css"; // CLASS CSS
// document.querySelector("#titulo").textContent = "id css"; // ID CSS

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        paciente.querySelector(".info-imc").textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        paciente.querySelector(".info-imc").textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 500) {
        return true;
    }

    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    }

    return false;
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}