function formatDateTime(dataHora) {
    const data = new Date(dataHora);

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const ano = data.getFullYear();

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}

function mountPedidos(pedidos) {
    console.log("Pedidos dentro de mountPedidos:", pedidos); // Confirma os dados recebidos
    let lista = "";

    for (let pedido of pedidos) {
        lista += `
            <tr>
                <th scope="row">${pedido.id}</th>
                <td>${pedido.clienteName}</td>
                <td>${pedido.status}</td>
                <td>${pedido.valor_total}</td>
                <td>${formatDateTime(pedido.data_hora)}</td>
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
