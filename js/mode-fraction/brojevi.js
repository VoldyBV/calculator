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
var izraz = ["", "", "", "", "", "", "", ""];
var brf = 0;

function Broj(broj){
	izraz[brf] += broj;
	PRINT();
}
function Tacka(){
	function finddot(s){
		for(var i = 0;i < s.length;i++){
			if(s[i] == ".") return true;
		}
		return false;
	}

	if(finddot(izraz[brf]) == false){
		if(izraz[brf] != ""){
			izraz[brf] += ".";
			PRINT();
		}
	}
}
function Razlomacka() {
	if(brf < 7){
		if(Number(izraz[brf]) != 0){
			brf++;
			document.getElementById("screen2").innerHTML += "/";
		}
	}
}
function PRINT(){
	var screen2 = document.getElementById('screen2');

	screen2.innerHTML = "";

	for(var i = 0;i < brf;i++){
		screen2.innerHTML += izraz[i] + "/";
	}

	screen2.innerHTML += izraz[brf];
}