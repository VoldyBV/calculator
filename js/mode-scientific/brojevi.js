function Broj(br){
	var scr2 = document.getElementById("screen2");
	if(scr2.innerHTML[scr2.innerHTML.length - 1] != "e"){
		scr2.innerHTML += br;
	}
}
function BrPi(){
	var scr2 = document.getElementById("screen2");
	scr2.innerHTML = Math.PI;
}