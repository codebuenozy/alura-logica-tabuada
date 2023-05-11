function calcularTabuada() {
	var numero = document.getElementById("numero").value;
	var multiplicador = document.getElementById("multiplicador").value;
	var cor = document.getElementById("cor").value;
	var resultado = "";

	for (var i = 1; i <= multiplicador; i++) {
		resultado += "<span style='color: " + cor + "'>" + numero + " x " + i + " = " + (numero * i) + "</span><br>";
	}

	document.getElementById("resultado").innerHTML = resultado;
}
