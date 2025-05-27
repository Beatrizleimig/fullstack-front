function savePedido() {
    // jquery
    let id_cliente = $("#clientes").val(); 
    //let itens = itensPedido;  
    let status = $("#status").val(); // pega o valor do input
    let valor_total = $("#valor_total").val(); // pega o valor do input
    let data_hora = $("#data_hora").val(); // pega o valor do input
    let id = $("#index-pedido").val(); // pega o valor do input

    let pedido = { id_cliente, status, valor_total, data_hora, id }; // criando o objeto

    let statusBotao = $('#salvar-btn-pedido').text();

    console.log(statusBotao);

    if (statusBotao == "Salvar") {
        if (pedido.id_cliente === "" || pedido.itens === "" || pedido.status === "" || pedido.valor_total === "" || pedido.data_hora === "") {
            return;
        }
        delete pedido.id;

        fetch(
            API_BASE_URL + "/pedidos/register",
            {   
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(pedido)
            }
        ).then(resp => resp.json())
          .then(data => {
              console.log("Resposta da API:", data);
              $("#salvar-btn-pedido").text("Salvar"); // muda o valor do botão de Salvar para Editar
              getPedidos();
              tableShow('pedido');
              setTimeout(() => {
                  $("form").removeClass("was-validated");
              }, 1);
              $("form").trigger("reset");
          })
          .catch(error => console.error("Erro ao salvar pedido:", error));

    } else {
        if (pedido.cliente === "" || pedido.itens === "" || pedido.status === "" || pedido.valor_total === "" || pedido.data_hora === "") {
            return;
        }

        fetch(
            API_BASE_URL + "/pedidos/update",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(pedido)
            }
        ).then(() => {
            $("#salvar-btn-pedido").text("Salvar"); // muda o valor do botão de Salvar para Editar
            getPedidos();
            tableShow('pedido');
            setTimeout(() => {
                $("form").removeClass("was-validated");
            }, 1);
            $("form").trigger("reset");
        })
        .catch(error => console.error("Erro ao atualizar pedido:", error));
    }
}
