function formShow(form){
  $('#loader').show()
  $('#table-content').hide()
  $('#login-content').hide()
	$('.navbar-toggler').show()
  setTimeout(()=>{
    $('#loader').hide()
  }, 500)
	
		if(form === "user"){
			$('#form-content').load('../pages/user/user-form.html')
			setTimeout(()=>{
			formConfig()
    	$('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
		}
	
		if(form === "product"){
			$('#form-content').load('../pages/product/product-form.html');
			setTimeout(()=>{
			formConfig()
    	$('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
		}

		if(form === "cliente"){
			$('#form-content').load('../pages/cliente/cliente-form.html');
			setTimeout(()=>{
			formConfig()
    	$('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
		}

		if(form === "pedido"){
			$('#form-content').load('../pages/pedido/pedido-form.html');
			setTimeout(()=>{
			formConfig()
    	$('#form-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			},700)
		}


		
}


function tableShow(table){
  $('#loader').show()
  $('#form-content').hide()
  $('#login-content').hide()
	$('.navbar-toggler').show()
	$('.navbar-dark').show()
  setTimeout(()=>{
    $('#loader').hide()
  },500)
	
		if(table === "user"){
			setTimeout(() => {
    		$('#table-content').load('../pages/user/user-table.html')
				$("form").removeClass("was-validated")
				$("form").trigger("reset")
   			$('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			}, 700)
		}
	
		if(table === "dashboard"){
			setTimeout(() => {
    		$('#table-content').load('../pages/dashboard/dashboard.html')
				$("form").removeClass("was-validated")
				$("form").trigger("reset")
   			$('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			}, 700)
		}
	
		if(table === "product"){
    $('#table-content').load('../pages/product/product-table.html');
			setTimeout(() => {
				$("form").removeClass("was-validated")
				$("form").trigger("reset")
    		$('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			}, 700)
		}

		if(table === "cliente"){
    $('#table-content').load('../pages/cliente/cliente-table.html');
			setTimeout(() => {
				$("form").removeClass("was-validated")
				$("form").trigger("reset")
    		$('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			}, 700)
		}

		if(table === "pedido"){
    $('#table-content').load('../pages/pedido/pedido-table.html');
			setTimeout(() => {
				$("form").removeClass("was-validated")
				$("form").trigger("reset")
    		$('#table-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
			}, 700)
		}
}


function loginShow(){
  $('#loader').show()
  $('#table-content').hide()
  $('#form-content').hide()
	$('.navbar-toggler').hide()
  $('#login-content').load( '../pages/auth/login-form.html');
	
  setTimeout(()=>{
    $('#loader').hide()
  },500)
	
	setTimeout(()=>{
		formConfig()
   	$('#login-content').show({ duration: 500, easing: 'swing', effect: 'fade' })
	},700)
}


function formConfig(){
	const forms = $('.needs-validation')
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault()
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
}