function validar() {
    error = false;
    tipos = ["TEXT", "NUMBER", "TEL"]; //lista para a validação

    inputs = document.getElementsByTagName("input");//5 inputs    
    for (i = 0; i < inputs.length; i++) {
        if (tipos.includes(inputs[i].type.toUpperCase()) && (inputs[i].value == "")) {
            document.getElementById(`${inputs[i].name}ERROR`).innerHTML = `${inputs[i].name} está em branco. Tente novamente!`;
            error = true;
        }
    }

    if (!document.getElementById("rdFem").checked && !document.getElementById("rdMas").checked) {
        document.getElementById("SEXOERROR").innerHTML = "O SEXO não foi selecionado!";
        error = true;
    }

    if (document.getElementById("slcEstado").value == "selecione") {
        document.getElementById("ESTADOERROR").innerHTML = "O ESTADO CIVIL não foi selecionado!";
        error = true;
    };

    if (document.getElementById("txtComent").value == "") {
        document.getElementById("COMENTARIOERROR").innerHTML = "O COMENTÁTIO está em branco!";
        error = true;
    }
    if (!error) {
        alert("Cadastrado!");
    }
}

function limpaErro(name) {
    document.getElementById(`${name}ERROR`).innerHTML = "";
}