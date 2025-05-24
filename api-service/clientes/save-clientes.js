function saveCliente() {
    // jquery
    let name = $("#name").val(); // pega o valor do input
    let phone = $("#phone").val(); // pega o valor do input
    let address = $("#address").val(); // pega o valor do input
    let email = $("#email").val(); // pega o valor do input
    let id = $("#index-cliente").val(); // pega o valor do input

    let cliente = { name, phone, address, email, id }; // criando o objeto

    let status = $('#salvar-btn-cliente').text();

    console.log(status);

    if (status == "Salvar") {
        if (cliente.name === "" || cliente.email === "") {
            return;
        }
        delete cliente.id;
        fetch(
            API_BASE_URL + "/clientes/register/",
            {   
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(cliente)
            }
        ).then((resp) => {
           resp.json().then(data => console.log("Resposta da API:", data));

            $("#salvar-btn-cliente").text("Salvar"); // muda o valor do botão de Salvar para Editar
            getClientes();
            tableShow('cliente');
            setTimeout(() => {
                $("form").removeClass("was-validated");
            }, 1);
            $("form").trigger("reset");
        });

    } else {
        if (cliente.name === "" || cliente.email === "") {
            return;
        }
        console.log("Dados enviados no POST:", JSON.stringify(cliente));

        fetch(
            API_BASE_URL + "/clientes/update/",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(cliente)
            }
        ).then(() => {
            $("#salvar-btn-cliente").text("Salvar"); // muda o valor do botão de Salvar para Editar
            getClientes();
            tableShow('cliente');
            setTimeout(() => {
                $("form").removeClass("was-validated");
            }, 1);
            $("form").trigger("reset");
        });
    }
}
