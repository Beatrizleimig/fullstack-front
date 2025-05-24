async function getPedidos() {
    let token = localStorage.getItem('token');
    console.log('Token:', token);

    await fetch(API_BASE_URL + "/pedidos/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => response.json())
      .then((data) => {
          const pedidos = data;
          console.log("Pedidos recebidos:", pedidos);
          mountPedidos(pedidos); // Monta a tabela de pedidos
          return pedidos;
      })
      .catch(() => {
          console.error("Erro ao buscar pedidos");
          // $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>");
      });
}

getPedidos();
