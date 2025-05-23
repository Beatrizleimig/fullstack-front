async function editUser(id) {
	await fetch(
		API_BASE_URL + "/users/" +
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
			const user = data[0];
			console.log(user);

			formShow("user");

			setTimeout(() => {
				$("#salvar-btn").text("Editar"); // muda o valor do botao "salvar" para "editar"
				$("#index").val(user.id);
				$("#username").val(user.username);
				$("#email").val(user.email);
				document.getElementById("password").placeholder = "Insira a nova senha";
			}, 1000);
		});
}
