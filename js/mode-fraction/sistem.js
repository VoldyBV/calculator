function Bckspc() {
	if(izraz[brf] != ""){
		izraz[brf] = izraz[brf].slice(0, izraz[brf].length - 1);
		if(izraz[brf] == "" && brf > 0) brf--;
		PRINT();
	}
}
function Clear(){
	izraz = ["", "", "", "", "", "", "", ""];
	brf = 0;
	document.getElementById("screen2").innerHTML = "";
}
function CE() {
	Clear();
	document.getElementById('screen1').innerHTML = "";
	document.getElementById('operator').innerHTML = "";
}
function Evaluate() {
	var screen1 = document.getElementById('screen1');
	var screen2 = document.getElementById('screen2');

	if(screen1.innerHTML != "" && screen2.innerHTML != ""){
		if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
			var f1 = new Fraction(screen1.innerHTML), f2 = new Fraction(screen2.innerHTML);
			var f;

			switch(operator) {
				case '+': f = f1.add(f2); break; 
				case '-': f = f1.sub(f2); break; 
				case '*': f = f1.mul(f2); break; 
				case '/': f = f1.div(f2); break; 
				default: break;
			}

			CE();
			f = (f.value + "").split("/");
			brf = f.length - 1;
			for(var i = 0;i < f.length;i++){
				izraz[i] = f[i];
			}
			PRINT();
		}
		else if(operator == "<" || operator == "<=" || operator == ">" || operator == ">=" || operator == "==" || operator=="!="){
			var f1 = new Fraction(screen1.innerHTML), f2 = new Fraction(screen2.innerHTML);
			CE();
			var bool = Math.compareFracts(f1, operator, f2);
			if (bool == true) {alert("true")}
				else alert("false")
		}
		else{
			var f1 = new Fraction(screen1.innerHTML), f2 = new Fraction(screen2.innerHTML);
			var f = fop.pow(f1, f2.toNumber());
			CE();
			f = (f.value + "").split("/");
			brf = f.length - 1;
			for(var i = 0;i < f.length;i++){
				izraz[i] = f[i];
			}
			PRINT();
		}
	}
}