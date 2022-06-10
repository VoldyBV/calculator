class Complex{
	constructor(value){
		try{
			var error;
			if(value == undefined) {error = new Error("c", 1); throw error;}
			if(value == "") {error = new Error("c", 2); throw error}

			this.value = value;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	module(){
		return (this.re**2 + this.im**2)**0.5;
	}
	conjugate(){
		var a = new Complex(this.value);
		a.im *= -1;
		return a;
	}
	argument(){
		return Math.atan(this.im / this.re) * 1;
	}
	get value(){
		var s = "";
		if(this.re == 0 && this.im == 0) return "0";
		if(this.re != 0)	s += this.re;
		if(this.im > 0 && this.re != 0) 	s += "+" + this.im + "i";
		if(this.im > 0 && this.re == 0)		s += this.im + "i";
		if(this.im < 0)		s += "-" + this.im*-1 + "i";
		return s;
	}
	set value(s){
		try{
			var error = new Error("c", 3);
			if(s[s.length-1] != "i"){
				var re = 0, im = 0;
				re = s * 1;
				if(isNaN(re)) throw error;
				this.re = re;
				this.im = im;
			}
			else{
				s = s.slice(0, s.length-1); 
				var predznak = true;
				var i = 0, l = s.length;

				for(i;i < l;i++){
					if((s[i] == "+" || s[i] == "-") && predznak == false){
						break;
					}
					predznak = false;
				}

				if(i == l){
					var re = 0, im = 0;
					im = s * 1;
					if(isNaN(im)) throw error;
					this.re = re;
					this.im = im;
				}
				else{
					var re = s.slice(0, i) * 1;
					var im = s.slice(i, l) * 1;
					if(isNaN(re) || isNaN(im)) throw error;
					this.re = re;
					this.im = im;
				}
			}
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
}
var cop = {
	is_complex(a){
		if(a == undefined)	return false;
		if(a.re != undefined && a.im != undefined) return true;
		else return false;
	},
	pow(Z, n){
		n *= 1;
		var error;
		try{
			if(this.is_complex(Z) == false)	{error = new Error("c", 4); throw error;}
			else if(isNaN(n) == true || n == undefined) {error = new Error("c", 5);throw error;}
			else{
				var r = Z.module() ** n;
				var p = Z.argument() * n;
				var re = r * Math.cos(p).toFixed(12)*1;
				var im = r * Math.sin(p).toFixed(12)*1;
				re = re.toFixed(11)*1;
				im = im.toFixed(11)*1;

				var p = new Complex("0+0i");
				p.re = re;
				p.im = im;
				return p;
			}
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	solve(a, op, b){
		var error;
		try{
			if(this.is_complex(a) == false){ error = new Error("c", 6); throw error;}
			if(op != "+" && op != "-" && op != "*" && op != "/"){ error = new Error("c", 7); throw error;}
			if(this.is_complex(a) == false){ error = new Error("c", 8); throw error;}

			var re, im, res = new Complex("0");

			if(op == "/" && b.value == "0") {error = new Error("c", 9); throw error;}

			switch(op){
				case "+":
					re = a.re + b.re;
					im = a.im + b.im;
					break;
				case "-":
					re = a.re - b.re;
					im = a.im - b.im;
					break;
				case "*":
					re = a.re*b.re - a.im*b.im;
					im = a.re*b.im + a.im*b.re;
					break;
				case "/":
					b = b.conjugate();
					var imen = b.re*b.re + b.im*b.im;
					re = a.re*b.re - a.im*b.im;
					im = a.re*b.im + a.im*b.im;
					re /= imen;
					im /= imen;
					break;
				default: break;
			}
			res.re = re;
			res.im = im;
			return res;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
}