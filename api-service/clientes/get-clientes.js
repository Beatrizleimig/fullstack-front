async function getClientes() {
	let token = localStorage.getItem('token')
	console.log('ele', token)
    console.log("API sendo chamada:", API_BASE_URL + "/clientes/");
	await fetch(API_BASE_URL + "/clientes/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
		const clientes = data
		console.log(clientes)
		mountClientes(clientes)
		return clientes
	}).catch(() => {
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

async function getSelectClientes() {
	let token = localStorage.getItem('token')
	console.log('ele', token)
    console.log("API sendo chamada:", API_BASE_URL + "/clientes/");
	await fetch(API_BASE_URL + "/clientes/", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then((response) => {
		return response.json()
	}).then((data) => {
		const clientes = data
		console.log(clientes)
		mountSelectClientes(clientes)
		return clientes
	}).catch(() => {
		// $("#mensage-table").html("<h6>Erro ao montar a tabela. Faça login</h6>")
	})
}

getClientes()