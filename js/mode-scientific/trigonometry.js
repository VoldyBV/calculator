function Trigonometrija(elem) {if(Dozvoljeno){
	var scr2 = document.getElementById("screen2");
	var dr = document.getElementById("deg-rad").innerHTML;
	var angle = new Angle(scr2.innerHTML, dr);
	var result;

	switch(elem.innerHTML){
		case 'sin': result = angle.sin(); break;
		case 'cos': result = angle.cos(); break;
		case 'tan': result = angle.tan(); break;
		case 'csc': result = angle.csc(); break;
		case 'sec': result = angle.sec(); break;
		case 'ctg': result = angle.ctg(); break;
		case 'exs': result = angle.exs(); break;
		case 'exc': result = angle.exc(); break;
		case 'ver': result = angle.ver(); break;
		case 'cov': result = angle.cov(); break;
		case 'vec': result = angle.vec(); break;
		case 'cvc': result = angle.cvc(); break;
		case 'crd': result = angle.crd(); break;
		default: break;
	}
	scr2.innerHTML = result;
}}
function Inv_Trigonometrija(elem) {if(Dozvoljeno){
	var scr2 = document.getElementById("screen2");
	var dr = document.getElementById("deg-rad").innerHTML;
	var angle;
	alert(elem.innerHTML);
	switch(elem.innerHTML){
		case 'asin': angle = Math.trigonometry.asin(scr2.innerHTML, dr); break;
		case 'acos': angle = Math.trigonometry.acos(scr2.innerHTML, dr); break;
		case 'atan': angle = Math.trigonometry.atan(scr2.innerHTML, dr); break;
		case 'acsc': angle = Math.trigonometry.acsc(scr2.innerHTML, dr); break;
		case 'asec': angle = Math.trigonometry.asec(scr2.innerHTML, dr); break;
		case 'actg': angle = Math.trigonometry.actg(scr2.innerHTML, dr); break;
		case 'aexs': angle = Math.trigonometry.aexs(scr2.innerHTML, dr); break;
		case 'aexc': angle = Math.trigonometry.aexc(scr2.innerHTML, dr); break;
		case 'aver': angle = Math.trigonometry.aver(scr2.innerHTML, dr); break;
		case 'acov': angle = Math.trigonometry.acov(scr2.innerHTML, dr); break;
		case 'avec': angle = Math.trigonometry.avec(scr2.innerHTML, dr); break;
		case 'acvc': angle = Math.trigonometry.acvc(scr2.innerHTML, dr); break;
		case 'acrd': angle = Math.trigonometry.acrd(scr2.innerHTML, dr); break;
		default: break;
	}

	scr2.innerHTML = angle.value;
}}
function Invert(elem) {if(Dozvoljeno){
	var dugmad = document.getElementsByClassName('trigonometry');

	for(var i = 0;i < 13;i++){
		dugmad[i].classList.add("inv-trigonometry");
	}

	elem.classList.remove("inv-trigonometry");
	elem.classList.add("trigonometry")
	dugmad = document.getElementsByClassName("inv-trigonometry");

	for(var i = 0;i < 13;i++){
		dugmad[i].classList.remove("trigonometry");
		dugmad[i].innerHTML = "a" + dugmad[i].innerHTML;
		dugmad[i].setAttribute("onCLick", "Inv_Trigonometrija(this)")
	}

	elem.setAttribute("onCLick", "Inv_Invert(this)");
	Titles_Of_Trigonometry_Buttons("inv-trigonometry")
}}
function Inv_Invert(elem) {if(Dozvoljeno){
	var dugmad = document.getElementsByClassName('inv-trigonometry');

	for(var i = 0;i < 13;i++){
		dugmad[i].classList.add("trigonometry");
	}

	elem.classList.remove("trigonometry");
	elem.classList.add("inv-trigonometry")
	dugmad = document.getElementsByClassName("trigonometry");

	for(var i = 0;i < 13;i++){
		dugmad[i].classList.remove("inv-trigonometry");
		dugmad[i].innerHTML = dugmad[i].innerHTML.slice(1,4);
		dugmad[i].setAttribute("onCLick", "Trigonometrija(this)")
	}

	elem.setAttribute("onCLick", "Invert(this)");
}}