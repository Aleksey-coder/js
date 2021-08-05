window.addEventListener("DOMContentLoaded", function() {
	let checkbox = document.getElementById('rememberMe');
		chande = document.getElementById("chande"),
		form = document.getElementsByTagName("form")[0];
		
	if(localStorage.getItem("isChecked") === "true") {
		checkbox.checked = true;
	};
	
	if(localStorage.getItem("dg") === "changed") {
		form.style.backgroundColor = "#FF4766";
	}
	checkbox.addEventListener("click", function() {
		localStorage.setItem("isChecked", true);
	});
	
	chande.addEventListener('click', function() {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = "#FF4766";
	});
	
	let persone = {
		name: "Alex",
		age: 25,
		tech: ["mobile", 'notebook']
	}
	
	let serializedPersone = JSON.stringify(persone);
	localStorage.setItem("Alex", serializedPersone);
	
	console.log(JSON.parse(localStorage.getItem("Alex")));
});

//document.body.innerHTML = "Ого! Я вляз в вашу страничку!"