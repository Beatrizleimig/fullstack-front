function saveProduct() {
	// jquery
	let name = $("#name").val() // pega o valor do input
	let price = $("#price").val() // pega o valor do input 
	let quantity = $("#quantity").val() // pega o valor do input 
	let id = $("#index-product").val() // pega o valor do input 

	let product = { name, price, quantity, id } // criando o objeto

	let status = $('#salvar-btn-product').text()

	console.log(status)

	if (status == "Salvar") {
		if(product.name === "" || product.price === "" || product.quantity === ""){
		return
		}
		delete product.id
		fetch(
			API_BASE_URL + "/products/register/",
			{	
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify(product)
			}
		).then((resp)=>{
			console.log(resp.json())
				$("#salvar-btn").text("Salvar") // muda o valor do botão de Salvar para Editar
				getProducts()
				tableShow('product')
				setTimeout(() => {
					$("form").removeClass("was-validated")
				}, 1)
				$("form").trigger("reset")
			})

	} else {
		if(product.name === "" || product.price === "" || product.quantity === ""){
		return
		}
		fetch(
			 API_BASE_URL + "/products/update/",
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify(product)
			}
		).then(()=>{
		$("#salvar-btn-product").text("Salvar") // muda o valor do botão de Salvar para Editar
		getProducts()
		tableShow('product')
		setTimeout(() => {
			$("form").removeClass("was-validated")
		}, 1)
		$("form").trigger("reset")
		})
	}

}
