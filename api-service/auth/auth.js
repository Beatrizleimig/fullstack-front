async function login() {
	var username = document.getElementById("username-login").value;
	var password = document.getElementById("password-login").value;

	var user = {
		username: username,
		password: password,
	};

	let url = API_BASE_URL + "/login";

	if (username === "" || password === "") {
		return;
	}

	try {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			mode: "cors",
		});

		if (!response.ok) {
			throw new Error(`Erro na requisição: ${response.statusText}`);
		}

		const data = await response.json();

		localStorage.setItem("token", data.token);
		localStorage.setItem("user", user.username);
		await tableShow("dashboard");

		console.log("user", user.username);

		$("#userName").text("Usuário: " + user.username.toUpperCase());
	} catch (error) {
		console.log(error);
	}
}

function logout() {
	fetch(API_BASE_URL + "/logout", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(() => {
		localStorage.removeItem("token");
		$(".navbar-dark").hide();
		loginShow();
		setTimeout(() => {
			$("form").removeClass("was-validated");
		}, 1);
		$("form").trigger("reset");
	});
}
