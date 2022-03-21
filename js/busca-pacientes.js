var buscaPacientes = document.querySelector("#buscar-pacientes");

buscaPacientes.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (this.status == 200) {
            erroAjax.classList.add("invisivel");

            var pacientes = JSON.parse(this.responseText);

            pacientes.forEach(paciente => {
                addPaciente(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});