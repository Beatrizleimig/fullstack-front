function deletePedido(id) {
    console.log("Enviando DELETE para pedido ID:", id); // 🔥 Debug

    let pedido = { id: id };

    fetch(
        API_BASE_URL + "/pedidos/delete",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(pedido)
        }
    ).then(resp => resp.json())
      .then(data => {
          console.log("Resposta da API:", data);
          getPedidos(); // Atualiza a tabela após deletar
      })
      .catch(error => console.error("Erro ao deletar pedido:", error));
}
