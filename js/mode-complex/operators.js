function Operator(op){
	var s = document.getElementById('screen2').innerHTML;
	var o = document.getElementById('operator');

	if(o.innerHTML == "" && s != ""){
		document.getElementById('screen1').innerHTML = s;
		o.innerHTML = op
		Clear();
	}
	if(op == "^"){
		document.getElementById('switcher').innerHTML = "re";
	}
}