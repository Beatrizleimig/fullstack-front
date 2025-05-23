async function editProduct(id) {
	await fetch(
		API_BASE_URL + "/products/" +
			id,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		},
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const product = data[0];
			console.log(product);

			formShow("product");

			setTimeout(() => {
				$("#salvar-btn-product").text("Editar"); // muda o valor do botao "salvar" para "editar"
				$("#index-product").val(product.id);
				$("#name").val(product.name);
				$("#price").val(product.price);
				$("#quantity").val(product.quantity);
			}, 1000);
		});
}
