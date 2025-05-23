let urlBase = "http://localhost:3000";

function saveUser() {
	// jquery
	let username = $("#username").val(); // pega o valor do input
	let password = $("#password").val(); // pega o valor do input
	let email = $("#email").val(); // pega o valor do input
	let id = $("#index").val(); // pega o valor do input

	let user = { username, password, email, id }; // criando o objeto

	let status = $("#salvar-btn").text();

	console.log(status);

	if (status == "Salvar") {
		if (user.username === "" || user.password === "" || user.email === "") {
			return;
		}
		fetch(
			urlBase + "/users/register/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(user),
			},
		).then(() => {
			$("#salvar-btn").text("Salvar"); // muda o valor do botão de Salvar para Editar
			getUsers();
			tableShow("user");
			setTimeout(() => {
				$("form").removeClass("was-validated");
			}, 1);
			$("form").trigger("reset");
		});
	} else {
		if (user.username === "" || user.password === "" || user.email === "") {
			return;
		}
		fetch(
			urlBase + "/users/update/",
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(user),
			},
		).then((resp) => {
			console.log(resp.json());
			$("#salvar-btn").text("Salvar"); // muda o valor do botão de Salvar para Editar
			getUsers();
			tableShow("user");
			setTimeout(() => {
				$("form").removeClass("was-validated");
			}, 1);
			$("form").trigger("reset");
		});
	}
}
