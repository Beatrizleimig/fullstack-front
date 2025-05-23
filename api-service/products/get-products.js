async function getProducts() {
	let token = localStorage.getItem('token')
	console.log('ele', token)
	await fetch(API_BASE_URL + "/products/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
		const products = data
		console.log(products)
		mountProducts(products)
		return products
	}).catch(() => {
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

getProducts()