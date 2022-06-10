class Fraction{
	#brojilac;
	#imenilac;
	constructor(value){
		this.value = value;
	}
	get numerator(){
		return this.#brojilac;
	}
	get denominator(){
		return this.#imenilac;
	}
	get value(){
		if(this.numerator == 0) return 0;
		if(this.denominator == 1) return this.numerator;
		return this.numerator + "/" + this.denominator;
	}
	set numerator(br){
		var error;
		try{
			if(br == undefined){error = new Error("f", 1); throw error;}
			if(isNaN(br*1)){error = new Error("f", 3); throw error;}
			this.#brojilac = br;
			this.#normalize();
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	set denominator(br){
		var error;
		try{
			if(br == undefined){error = new Error("f", 1); throw error;}
			if(isNaN(br*1)){error = new Error("f", 3); throw error;}
			if(br * 1 == 0){error = new Error("f", 4); throw error;}
			this.#imenilac = br;
			this.#normalize();
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	set value(s){
		var error;
		try{
			if(s == undefined){ error = new Error("f", 1); throw error;}
			if(s == ""){ error = new Error("f", 2); throw error;}
			if(s.search("/") == -1){
				var br = s * 1, im = 1;
				if(isNaN(br)) {error = new Error("f", 3);throw error};
				this.#brojilac = br;
				this.#imenilac = im;
			}
			else{
				var parts = s.split("/");
				var br = parts[0] * 1;
				var im = parts[1] * 1;
				if(isNaN(br)) {error = new Error("f", 3);throw error}
				if(isNaN(im)) {error = new Error("f", 3);throw error}
				if(im == 0) {error = new Error("f", 4); throw error;}
				this.#brojilac = br;
				this.#imenilac = im;
			}
			this.#normalize();
		}
		catch(error){
			error = error.valueOf();
			alert(error)
			console.error(error);
			return undefined;
		}
	}
	rec(){
		return new Fraction(this.#imenilac + "/" + this.#brojilac);
	}
	to_decimal(){
		return this.numerator / this.denominator;
	}
	#normalize(){
		var n = this.#brojilac, d = this.#imenilac;
		function gcf(a, b) {
			if(b == 0) return a;
			else return gcf(b, a%b);
		}

		while(n != Math.floor(n)){
			n *= 10;
			d *= 10;
		}
		while(d != Math.floor(d)){
			n *= 10;
			d *= 10;
		}
		var nzd = gcf(n, d);
		n /= nzd;
		d /= nzd;
		if(d < 0){
			n *= -1;
			d *= -1;
		}
		this.#brojilac = n;
		this.#imenilac = d;
	}
}
var fop = {
	is_fraction(a){
		if(a == undefined)	return false;
		if(a.numerator != undefined && a.denominator != undefined)	return true;
		return false;
	},
	solve(a, op, b){
		try{
			var error;
			 if(this.is_fraction(a) == false){ error = new Error("f", 5); throw error}
			 if(op != "+" && op != "-" && op != "*" && op != "/"){ error = new Error("f", 6); throw error}
			 if(this.is_fraction(b) == false){ error = new Error("f", 7); throw error}
			 if(op == "/" && b.to_decimal == 0){ error = new Error("f", 8); throw error}

			 var br, im, res = new Fraction("0");

			 switch(op){
			 	case "+":
			 		br = a.numerator * b.denominator + a.denominator * b.numerator;
			 		im = a.denominator * b.denominator;
			 		break;
			 	
			 	case "-":
			 		br = a.numerator * b.denominator - a.denominator * b.numerator;
			 		im = a.denominator * b.denominator;
			 		break;
			 	case "*":
			 		br = a.numerator * b.numerator;
			 		im = a.denominator * b.denominator;
			 		break;
			 	case "/":
			 		br = a.numerator * b.denominator;
			 		im = a.denominator * b.numerator;
			 		break;
			 	default: break;
			 }
			 res.value = br + "/" + im;
			 return res;
		} 
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	pow(F, n){
		try{
			var error;
			n *= 1;
			if(this.is_fraction(F) == false){ error = new Error("f", 9); throw error;}
			if(isNaN(n)){ error = new Error("f", 10); throw error}

			if(n < 0){
				F = F.rec();
				n *= -1;
			}

			var br = (F.numerator ** n).toFixed(14) * 1;
			var im = (F.denominator ** n).toFixed(14) * 1;
			var res = new Fraction(br + "/" + im);
			return res;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	compare(a, op, b){
		try{
			var error;
			 if(this.is_fraction(a) == false){ error = new Error("f", 11); throw error}
			 if(op != ">" && op != ">=" && op != "<" && op != "<=" && op != "==" && op != "!="){ error = new Error("f", 12); throw error}
			 if(this.is_fraction(b) == false){ error = new Error("f", 13); throw error}

			 var prvi = a.numerator * b.denominator;
			 var drugi = a.denominator * b.numerator;

			 return eval(prvi + op + drugi);
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
			return undefined;
		}
	}
}