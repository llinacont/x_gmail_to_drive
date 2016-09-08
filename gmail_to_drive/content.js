var arr = document.getElementsByClassName("J-N");

[].forEach.call(arr, function(entry){
	alert(entry);
	entry.addEventListener("click", function(event){
		alert("Has pulsado una etiqueta.");
	});
});
