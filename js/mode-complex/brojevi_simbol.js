var re = "";
var im = "";

(
	() => {
		window.addEventListener("keydown", function(event){
			var key = event.key;
			var numbers = this.document.querySelectorAll(".number");
			var operators = this.document.querySelectorAll(".operations");
			if(event.keyCode == 8){
				this.document.querySelector("#bckspc").click();
			}
			else if(event.keyCode == 13){
				this.document.querySelector("#eval").click();
			}
			else{
				numbers.forEach((elem) => {
					if(elem.innerHTML == key) elem.click();
				});
				
				operators.forEach((elem) => {
					if(elem.innerHTML == key) elem.click();
				});
				
			}
		});
	}
)()

function Broj(broj) {
	var s = document.getElementById("switcher").innerHTML;
	switch(s){
		case 're': re += broj;break;
		case 'im': im += broj;break;
		default: break;
	}

	PRINT();

}
function Tacka(){
	var s = document.getElementById("switcher").innerHTML;

	function find(s, c){
		for(var i = 0, l = s.length;i < l;i++){
			if(s[i] == c) return i;
		}
		return -1;
	}

	if(s == "re"){
		if(find(re, ".") == -1){
			re += ".";
		}
	}
	else{
		if(find(im, ".") == -1){
			im += ".";
		}
	}

	PRINT();
}
function Negate(){
	var s = document.getElementById("switcher").innerHTML;
	
	if(s == "re") re = Number(re) * -1 + "";
	else im = Number(im) * -1 + "";

	PRINT();
}
function Switch(elem){
	if(document.getElementById('operator').innerHTML == "^") elem.innerHTML = "re";
	else if(elem.innerHTML == "re") elem.innerHTML = "im";
	else elem.innerHTML = "re";
}
function PRINT(){
	var num = "";

	if(Number(re) != 0) num += re;
	if(Number(im) > 0) num += "+" + im + "i";
	if(Number(im) < 0) num += im + "i";
	if(re * 1 == 0 && im * 1 == 0) num = re;
	if(re == "" && im == "0") num = im;

	document.getElementById('screen2').innerHTML = num;
}