async function editPedido(id) {
    await fetch(API_BASE_URL + "/pedidos/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const pedido = data;
            const itens = data.itens;
            
            console.log(pedido);
           console.log(itens);

            formShow("pedido");

            setTimeout(() => {
                $("#salvar-btn-pedido").text("Editar"); // Muda o botão "Salvar" para "Editar"
                $("#index-pedido").val(pedido.id);
                $("#clientes").val(pedido.id_cliente);
                $("#itens").val(pedido.itens);
                $("#status").val(pedido.status);
                $("#valor_total").text(pedido.valor_total);
                $("#data_hora").text(pedido.data_hora);

                // itensPedido
            itensPedido = itens;
            atualizarListaItens();
                
            }, 1000);
        })
        .catch((error) => console.error("Erro ao buscar pedido:", error));
}
