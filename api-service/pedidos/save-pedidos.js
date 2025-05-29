function savePedido() {
    // jquery
    let id_cliente = $("#clientes").val();  
    let status = $("#status").val(); // pega o valor do input
    //let valor_total = $("#valor_total").val(); // pega o valor do input
    let data_hora = $("#data_hora").val(); // pega o valor do input
    let id = $("#index-pedido").val(); // pega o valor do input
    let itens = itensPedido; 

    let pedido = { id_cliente, status, data_hora, id,  itens  }; // criando o objeto

    let statusBotao = $('#salvar-btn-pedido').text();

    console.log(statusBotao);

    if (statusBotao == "Salvar") {
        if (pedido.id_cliente === "" || pedido.status === "" || pedido.data_hora === "" || pedido.itens.length === 0 ) {
             alert("Por favor, preencha todos os campos e adicione ao menos um item ao pedido."); // Mensagem de erro mais específica
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
        ).then((resp)=>{
              console.log("Resposta da API:", resp);
              $("#valor_total").text("");
              $("#salvar-btn-pedido").text("Salvar"); // muda o valor do botão de Salvar para Editar
              getPedidos();
              tableShow('pedido');
              setTimeout(() => {
                  $("form").removeClass("was-validated");
              }, 1);
              $("form").trigger("reset");
              itensPedido = []; // Limpa os itens na memória após salvar
              atualizarListaItens(); // Atualiza a tabela de itens na UI
          })
          .catch(error => console.error("Erro ao salvar pedido:", error));

    } else {
        if (pedido.cliente === "" || pedido.itens === "" || pedido.status === "" || pedido.data_hora === "") {
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
             itensPedido = []; // Limpa os itens na memória após atualizar
            atualizarListaItens(); // Atualiza a tabela de itens na UI
        })
        .catch(error => console.error("Erro ao atualizar pedido:", error));
    }
}
