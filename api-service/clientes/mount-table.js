function mountClientes(clientes) {
    let lista = "";
    for (let cliente of clientes) {
        lista +=
            `
                <tr>
                    <th scope="row">${cliente.id}</th>
                    <td>${cliente.name}</td>
                    <td>${cliente.phone}</td>
                    <td>${cliente.address}</td>
                    <td>${cliente.email}</td>
                    <td>
                        <button type="button" onclick="editCliente(${cliente.id})" class="btn btn-primary btn-sm">Editar</button>
                        <button id="btn-deletar" type="button" onclick="deleteCliente(${cliente.id}); tableShow('cliente')" class="btn btn-danger btn-sm">Excluir</button>
                    </td>
                </tr>
            `;
    }
    $("#table-cliente").html(lista);
}

function mountSelectClientes(clientes) {
    let varOptions = '<option value="">Selecione um Cliente</option>';
    for (let cliente of clientes) {
        varOptions += `<option value="${cliente.id}">${cliente.name}</option>`;
    }
    console.log("varOptions: " + varOptions);
    $("#clientes").html(varOptions);
}
