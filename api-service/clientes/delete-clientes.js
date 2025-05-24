function deleteCliente(id) { // função deletar que pega o Id a ser deletado
	user = {
		id: id
	}
	console.log("ID a ser deletado:", id);
	fetch(
		API_BASE_URL + "/clientes/delete/",
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(user)
		}
	).then(() => {
		getClientes() // monta a tabela
	})
}