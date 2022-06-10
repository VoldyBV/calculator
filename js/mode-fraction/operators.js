var operator = "";

function Operator(op) {
	if(isNaN(izraz[brf]*1) == false && izraz[brf] != "" && izraz[brf] *1 != 0){
		NORM();
		document.getElementById('screen1').innerHTML = document.getElementById('screen2').innerHTML;
		Clear();
		operator = op;

		switch(op){
			case "<":op = "&#60;";break;
			case ">":op =  "&#62;";break;
			case "<=":op = "&#8804;";break;
			case ">=":op = "&#8805;";break;
			case "==":op = "&#61;";break;
			case "!=":op = "&#8800;";break;
			default: break;
		}

		document.getElementById('operator').innerHTML = op;
	}
}