function mountPedidos(pedidos) {
    let lista = "";
    for (let pedido of pedidos) {
        lista += `
            <tr>
                <th scope="row">${pedido.id}</th>
                <td>${pedido.cliente}</td>
                <td>${pedido.itens}</td>
                <td>${pedido.status}</td>
                <td>${pedido.valor_total}</td>
                <td>${pedido.data_hora}</td>
                <td>
                    <button type="button" onclick="editPedido(${pedido.id})" class="btn btn-primary btn-sm">Editar</button>
                    <button id="btn-deletar" type="button" onclick="deletePedido(${pedido.id}); tableShow('pedido')" class="btn btn-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    }
     console.log("HTML gerado:", lista);
    $("#table-pedido").html(lista);
}
