function Methods(which) {
	var comp = new Complex(screen2.innerHTML);
	var result;

	switch(which){
		case 'argument': result = comp.argument(); break;
		case 'module': result = comp.module(); break;
		default: break;
	}

	alert(result);
}
function CONJ(){
	var s = document.getElementById("screen2").innerHTML;
	var comp = new Complex(s);
	comp = comp.conjugate();

	document.getElementById('screen2').innerHTML = comp.value;
	re = comp.re;
	im = comp.im;
}