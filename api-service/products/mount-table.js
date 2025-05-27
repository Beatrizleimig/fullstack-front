function mountProducts(products) {
	let lista = ""
	for(let product of products){
		lista +=
			`
				<tr>
					<th scope="row">${product.id}</th>
					<td>${product.name}</td>
					<td>${product.price}</td>
					<td>${product.quantity}</td>
					<td>
						<button type="button" onclick="editProduct(${product.id})" class="btn btn-primary btn-sm">Editar</button>
						<button id="btn-deletar" type="button" onclick="deleteProduct(${product.id}); tableShow('product')" class="btn btn-danger btn-sm">Excluir</button>
					</td>
				</tr>
			`
	}
	$("#table-product").html(lista) 

}

function mountSelectProducts(products) {
    let varOptions = '<option value="">Selecione um Produto</option>';
    for (let product of products) {
        varOptions += `<option value="${product.id}">${product.name}</option>`;
    }
    console.log("varOptions: " + varOptions);
    $("#produto").html(varOptions);
}
