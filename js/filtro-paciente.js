var filtro = document.querySelector("#filtro-paciente");

filtro.addEventListener("input", function() {
    document.querySelectorAll(".paciente").forEach(paciente => {
        var nome = paciente.querySelector(".info-nome").textContent.toLowerCase();

        if (nome.includes(this.value.toLowerCase())) {
            paciente.classList.remove("invisivel");
        } else {
            paciente.classList.add("invisivel");
        }
    });
});