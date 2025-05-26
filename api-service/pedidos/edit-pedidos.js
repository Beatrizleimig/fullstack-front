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
            console.log(pedido);

            formShow("pedido");

            setTimeout(() => {
                $("#salvar-btn-pedido").text("Editar"); // Muda o botão "Salvar" para "Editar"
                $("#index-pedido").val(pedido.id);
                $("#cliente").val(pedido.cliente);
                $("#itens").val(pedido.itens);
                $("#status").val(pedido.status);
                $("#valor_total").val(pedido.valor_total);
                $("#data_hora").val(pedido.data_hora);
            }, 1000);
        })
        .catch((error) => console.error("Erro ao buscar pedido:", error));
}
