$('.botinf').click(function(){
	location.href = "./infierno.html";
})

$('.bothome').click(function(){
	location.href = "./LaPuertadelCieloPagina.html"
})

$('.botcie').click(function(){
	location.href = "./Cielo.html"
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var i2 = 0; 			// Start Point
var images2 = [];	// Images Array
var time2 = 3000;	// Time Between Switch
var i3 = 0; 			// Start Point
var images3 = [];	// Images Array
var time3 = 3000;	// Time Between Switch
	 
// Image List
images[0] = "./Recursos/Hela.png";
images[1] = "./Recursos/MallusEvolucionBase.png";
images[2] = "./Recursos/MallusPrimeraEvolucion.png";
images[3] = "./Recursos/MallusSegundaEvolucion.png";
images2[0] = "./Recursos/ElHueco.png";
images2[1] = "./Recursos/BestiaEvolucionBase.png";
images2[2] = "./Recursos/BestiaPrimeraEvolucion.png";
images2[3] = "./Recursos/BestiaSegundaEvolucion.png";
images3[0] = "./Recursos/Sacro.png";
images3[1] = "./Recursos/AngelEvolucionBase.png";
images3[2] = "./Recursos/AngelPrimeraEvolucion.png";
images3[3] = "./Recursos/AngelSegundaEvolución.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);

	document.slide2.src = images2[i2];

	// Check If Index Is Under Max
	if(i2 < images2.length - 1){
	  // Add 1 to Index
	  i2++; 
	} else { 
		// Reset Back To O
		i2 = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg2()", time2);

document.slide3.src = images3[i3];

	// Check If Index Is Under Max
	if(i3 < images3.length - 1){
	  // Add 1 to Index
	  i3++; 
	} else { 
		// Reset Back To O
		i3 = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg3()", time3);
}
// Run function when page loads
window.onload=changeImg;
/*
var i2 = 0; 			// Start Point
var images2 = [];	// Images Array
var time2 = 3000;	// Time Between Switch
	 
// Image List
images2[0] = "./Recursos/ElHueco.png";
images2[1] = "./Recursos/BestiaEvolucionBase.png";
images2[2] = "./Recursos/BestiaPrimeraEvolucion.png";
images2[3] = "./Recursos/BestiaSegundaEvolucion.png";

// Change Image
function changeImg2(){
	document.slide2.src = images2[i2];

	// Check If Index Is Under Max
	if(i2 < images2.length - 1){
	  // Add 1 to Index
	  i2++; 
	} else { 
		// Reset Back To O
		i2 = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg2()", time2);
}

// Run function when page loads
window.onload=changeImg2;*/
/*
var i3 = 0; 			// Start Point
var images3 = [];	// Images Array
var time3 = 3000;	// Time Between Switch
	 
// Image List
images3[0] = "./Recursos/Sacro.png";
images3[1] = "./Recursos/AngelEvolucionBase.png";
images3[2] = "./Recursos/AngelPrimeraEvolucion.png";
images3[3] = "./Recursos/AngelSegundaEvolución.png";

// Change Image
function changeImg3(){
	document.slide3.src = images3[i3];

	// Check If Index Is Under Max
	if(i3 < images3.length - 1){
	  // Add 1 to Index
	  i3++; 
	} else { 
		// Reset Back To O
		i3 = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg3()", time3);
}

// Run function when page loads
window.onload=changeImg3;
*/
var consulta = $("#searchTable").DataTable()


$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("header").css({
		"height": "100vh",
		"background": "rgba(0,0,0,0.5)"
	})

	if ($("#inputBusqueda").val() == ""){	

		$("header").css({
			"height": "auto",
			"background": "none"
		})
		$("#search").hide("fast");
	}else{
		$("#search").fadeIn("fast");
	}
})