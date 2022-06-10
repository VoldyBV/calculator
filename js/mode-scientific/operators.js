var isRec = false;
function Operators(op){if(Dozvoljeno){
	var scr1 = document.getElementById("screen1");
	var scr2 = document.getElementById("screen2");

	if(scr2.innerHTML[scr2.innerHTML.length-1] != ")"){
		scr1.innerHTML += scr2.innerHTML + op;
	
		if(isRec){
			Izraz += matf.rec(scr2.innerHTML);
			isRec = false;
		}
		else Izraz += scr2.innerHTML;
		if(op == "ˇ"){
			isRec = true;
			op = "**";
		}
		if(op == "^"){
			op = "**";
		}
		Izraz += op;
	}
	else{
		scr1.innerHTML += op + scr2.innerHTML;
		if(op == "ˇ"){
			isRec = true;
			op = "**";
		}
		if(op == "^"){
			op = "**";
		}
		Izraz += op;
	
		if(isRec){
			Izraz += matf.rec(scr2.innerHTML);
			isRec = false;
		}
		else Izraz += scr2.innerHTML;
	}
	scr2.innerHTML = "";
}}
function Zagrada(z) {if(Dozvoljeno){
	var scr1 = document.getElementById("screen1");

	if(z == "("){
		Izraz += "(";
		scr1.innerHTML += "(";
	}else{
		Izraz += document.getElementById("screen2").innerHTML + ")";
		scr1.innerHTML += document.getElementById("screen2").innerHTML + ")";
		document.getElementById("screen2").innerHTML = "";
	}
}}
function Tacka(){
	scr2 = document.getElementById("screen2");
	scr2.innerHTML += "."
}
function Zarez(argument) {if(!Dozvoljeno){
	scr2 = document.getElementById("screen2");
	scr2.innerHTML += ","
}}