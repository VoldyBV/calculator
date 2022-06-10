var BackUpSrc1 = "";
var Math_Funkcija = "";

function Method() {if(Dozvoljeno){
	var scr2 = document.getElementById("screen2");
	var result = Number(scr2.innerHTML);
	
	switch(which[0]){
		case 0: result = result.fact();break;
		case 1: result = result.subfact();break;
		case 2: result = Math.negate(result);break;
		case 3: result = Math.rec(result);break;
		default: break;
	}

	scr2.innerHTML = result;
}}
function Info(){if (Dozvoljeno) {
	var funkcija;
	var scr2 = document.getElementById('screen2');

	switch(which[2]){
		case 0: funkcija = "matf.isPrime(";break;
		case 1: funkcija = "matf.isArmstrong(";break;
		case 2: funkcija = "matf.isPerfect(";break;
		case 3: funkcija = "matf.toFactors(";break;
		default: break;
	}

	if(which[2] == 3){
		alert(eval(funkcija + scr2.innerHTML + ");"));
	}else{
		var a = eval(funkcija + scr2.innerHTML + ");");
		var msg = "Broj " + scr2.innerHTML + " ";

		if(a){
			msg += "jeste ";
		}
		else msg += "nije ";

		switch(which[2]){
			case 0: msg += "prost.";break;
			case 1: msg += "armstrongov broj.";break;
			case 2: msg += "savršen.";break;
			default: break;
		}

		alert(msg);
	}
}}
function Mathmatical(argument) {if(Dozvoljeno){
	var scr1 = document.getElementById("screen1");
	var scr2 = document.getElementById("screen2");

	Dozvoljeno = false;
	Disable();
	BackUpSrc1 = scr1.innerHTML;

	switch(which[1]){
		case 0: Math_Funkcija = "sum";scr1.innerHTML = "The sum of the numbers";break;
		case 1: Math_Funkcija = "avg";scr1.innerHTML = "The average value of numbers ";break;
		case 2: Math_Funkcija = "gcf";scr1.innerHTML = "The greatest common factor of numbers";break;
		case 3: Math_Funkcija = "lcm";scr1.innerHTML = "The lowest common multiple of numbers";break;
		case 4: Math_Funkcija = "log";scr1.innerHTML = "Logarithm broja";break;
		case 5: Math_Funkcija = "fix";scr1.innerHTML = "Round a number";break;
		default: break;
	}


}}