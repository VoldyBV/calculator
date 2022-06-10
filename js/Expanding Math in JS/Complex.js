class Complex{
	constructor(value){
		try{
			if(value == undefined) throw complexError('1');
			if(value == "") throw complexError('2');
			this.value = value;
		}
		catch(error){
			this.re = undefined;
			this.im = undefined;
			console.error(error)
		}
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
			if(s[s.length-1] != "i"){
				var re = 0, im = 0;
				re = s * 1;
				if(isNaN(re)) throw complexError('3');
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
					if(isNaN(im)) throw complexError('3');
					this.re = re;
					this.im = im;
				}
				else{
					var re = s.slice(0, i) * 1;
					var im = s.slice(i, l) * 1;
					if(isNaN(re) || isNaN(im)) throw complexError('3');
					this.re = re;
					this.im = im;
				}
			}
		}
		catch(error){
			console.error(error);
		}
	}
	module(){ return (this.re**2 + this.im**2)**0.5 }
	argument(){ return Math.atan(this.im / this.re).toFixed(13) }
	conjugate(){
		var a = new Complex(this.value);
		a.im *= -1;
		return a;
	}
	add(compNum){
		try{
			if(!Math.isComplex(compNum)) compNum = new Complex(compNum);
			if(!Math.isComplex(compNum)) throw complexError('4');

			var res = new Complex("0+0i");
			res.re = this.re + compNum.re;
			res.im = this.im + compNum.im;
			return res;
		}
		catch(error){
			console.error(error);
		}
	}
	sub(compNum){
		try{
			if(!Math.isComplex(compNum)) compNum = new Complex(compNum);
			if(!Math.isComplex(compNum)) throw complexError('4');

			var res = new Complex("0+0i");
			res.re = this.re - compNum.re;
			res.im = this.im - compNum.im;
			return res;
		}
		catch(error){
			console.error(error);
		}
	}
	mul(compNum){
		try{
			if(!Math.isComplex(compNum)) compNum = new Complex(compNum);
			if(!Math.isComplex(compNum)) throw complexError('4');

			var res = new Complex("0+0i");
			res.re = this.re*compNum.re - this.im*compNum.im;
			res.im = this.re*compNum.im + compNum.re*this.im;
			return res;
		}
		catch(error){
			console.error(error);
		}
	}
	div(compNum){
		try{
			if(!Math.isComplex(compNum)) compNum = new Complex(compNum);
			if(!Math.isComplex(compNum)) throw complexError('4');

			var res = this.mul(compNum.conjugate());
			var im = compNum.re**2 + compNum.im**2
			res.re /= im;
			res.im /= im;
			return res;
		}
		catch(error){
			console.error(error);
		}
	}
	pow(num){
		try{
			if(num == undefined) throw complexError(5);
			if(isNaN(num*1)) throw complexError(5);

			var r = this.module() ** num;
			var p = this.argument() * num;
			var re = (r * Math.cos(p).toFixed(12) * 1).toFixed(11) * 1;
			var im = (r * Math.sin(p).toFixed(12) * 1).toFixed(11) * 1;
			var res = new Complex("0+0i");

			res.re = re, res.im = im;
			return res;
		}
		catch(error){
			
		}
	}
}

Math.isComplex = (complex) => {//this method checks whether the given object is a Complex object
	if(complex.constructor.name == "Complex" && complex.re != undefined && complex.im != undefined) return true;
	return false;
}

//Errors
function complexError(errId) {
	errId += "";

	switch(errId){
		case '1': return "Complex Error 1:\n    Value of Complex object can not be undefined.";
		case '2': return "Complex Error 2:\n    Value of Complex object can not be null.";
		case '3': return "Complex Error 3:\n    Value of Complex object can not must be a complex number given as string.\nComplex number must be in 'a+bi' format.";
		case '4': return "Complex Error 4:\n    Argument of add, sub, mul and div methods must be a Complex object ot complex number given as string in 'a+bi' format.";
		default: return undefined;
	}
}