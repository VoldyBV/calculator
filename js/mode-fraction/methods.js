function NORM(){
	if(brf > 0 && isNaN(Number(izraz[brf])) == false && izraz[brf] * 1 != 0){
		var razlomak1 = new Array(4);
		var razlomak2 = new Array(2);
		var razlomak;
		var bolji_izraz = new Array(8);
	
		for(var i = 0;i < 8;i++){
			bolji_izraz[i] = "1";
		}
		for(var i = 0;i <= brf;i++){
			bolji_izraz[i] = izraz[i];
		}
	
		for(var i = 0, j = 0, k = 1;i < 4;i++,j+=2,k+=2){
			razlomak1[i] = new Fraction(bolji_izraz[j] + "/" + bolji_izraz[k]);
		}
	
		for(var i = 0,j = 0,k = 1;i < 2;i++,j+=2,k+=2){
			razlomak2[i] = razlomak1[j].div(razlomak1[k]);
		}
	
		razlomak = razlomak2[0].div(razlomak2[1]);
	
		Clear();
	
		razlomak = (razlomak.value + "").split("/");
		brf = razlomak.length - 1;
		for(var i = 0;i < razlomak.length;i++){
			izraz[i] = razlomak[i];
		}
		PRINT();
	}
}
function NEG() {
	if(isNaN(izraz[brf] * 1) == false){
		izraz[brf] = izraz[brf] * -1 + "";
		PRINT();
	}
}
function REC() {
	NORM();
	var s = "";

	if(izraz[0] != "" && izraz[0] != "-"){
		s += izraz[0];
		if(izraz[1] != "" && izraz[1] != "-"){
			s += "/" + izraz[1];
		}

		var f = new Fraction(s);
		izraz[0] = f.rec().numerator + "";
		izraz[1] = f.rec().denominator + "";
		PRINT()
	}
}