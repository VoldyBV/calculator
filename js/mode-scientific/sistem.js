function Eval(){
if(Dozvoljeno){
	var scr1 = document.getElementById("screen1");
	var scr2 = document.getElementById("screen2");

	Izraz += scr2.innerHTML;

	try{
		scr2.innerHTML = eval(Izraz);
		scr1.innerHTML = "";
		Izraz = "";
	}
	catch(error){
		alert("Syntax error")
	}
}
else{
	var scr2 = document.getElementById("screen2");
	
	try{
		var niz = scr2.innerHTML.split(",");
		var result;

		if(niz[niz.length-1] == "") niz = scr2.innerHTML.slice(0,scr2.innerHTML.length-1).split(",");
		
		switch(Math_Funkcija){
			case 'gcf': result = Math.gcf(niz); break;
			case 'lcm': result = Maht.lcm(niz); break;
			case 'sum': result = Math.sum(niz); break;
			case 'avg': result = Math.avg(niz); break;
			case 'log': result = Math.getBaseLog(niz[0], niz[1]); break;
			case 'fix': result = Math.fixTo(niz[0], niz[1]); break;
			default: break;
		}
		CE();
		
		scr2.innerHTML = result;
	}
	catch(error){
		alert(error);
	}
}
}
function Clear() {
	document.getElementById("screen2").innerHTML = "";
}
function CE(){
	var scr1 = document.getElementById("screen1");
	var scr2 = document.getElementById("screen2");
	if (Dozvoljeno) {
		scr1.innerHTML = scr2.innerHTML = Izraz = "";
	}
	else{
		scr1.innerHTML = BackUpSrc1;
		scr2.innerHTML = "";
		Dozvoljeno = true;
		Enable()
	}
}
function Bckspc() {
	var scr2 = document.getElementById("screen2");

	scr2.innerHTML = scr2.innerHTML.slice(0, scr2.innerHTML.length-1);
}
function degrad(elem) {
	if(elem.innerHTML == "deg") elem.innerHTML = "rad";
	else elem.innerHTML = "deg";
}