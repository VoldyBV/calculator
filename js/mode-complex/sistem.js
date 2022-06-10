function Bckspc() {
	var s = document.getElementById('switcher').innerHTML;

	if(s == "re"){
		re = re.slice(0, re.length-1);
		if(re == "-") re = "";
	}
	else if(s == "im"){
		im = im.slice(0, im.length-1);
	}

	PRINT();
}
function Clear() {
	re = "";
	im = "";
	PRINT();
}
function CE(argument) {
	document.getElementById('screen1').innerHTML = ""
	document.getElementById('screen2').innerHTML = "";
	document.getElementById('operator').innerHTML = "";
	re = im = "";
	PRINT();
}
function Evaluate() {
	var comp1 = document.getElementById('screen1').innerHTML;
	var comp2 = document.getElementById('screen2').innerHTML;
	var comp3 = new Complex("0+0i");
	var op = document.getElementById('operator').innerHTML;

	if(comp1 != "" && comp2 != ""){
		if(op != "^"){
			comp1 = new Complex(comp1);
			comp2 = new Complex(comp2);
			
			switch(op){
				case '+': comp3 = comp1.add(comp2); break;
				case '-': comp3 = comp1.sub(comp2); break;
				case '*': comp3 = comp1.mul(comp2); break;
				case '/': comp3 = comp1.div(comp2); break;
				default: break;
			}
		}
		else{
			comp1 = new Complex(comp1);
			comp2 *= 1;
			comp3 = comp1.pow(comp2)
		}
	}
	CE();
	document.getElementById('screen2').innerHTML = comp3.value;
	re = comp3.re;
	im = comp3.im;
}