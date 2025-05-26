async function editCliente(id) {
     console.log("Editar cliente: " + id);
   
    await fetch(
        API_BASE_URL + "/clientes/" + id,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const cliente = data;
           console.log("Cliente recebido:", cliente); 

            formShow("cliente");

            setTimeout(() => {
                $("#salvar-btn-cliente").text("Editar"); // muda o valor do botão "salvar" para "editar"
                $("#index-cliente").val(cliente.id);
                $("#name").val(cliente.name);
                $("#phone").val(cliente.phone);
                $("#address").val(cliente.address);
                $("#email").val(cliente.email);
            }, 1000);
        });
}
