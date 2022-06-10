class Fraction{
	//Containers for numerator and denominator
	#num;
	#den;
	#normalize(){
		var n = this.#num, d = this.#den;
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
		this.#num = n;
		this.#den = d;
	}

	constructor(value){ this.value = value; }

	//Getters
	get numerator(){ return this.#num }
	get denominator(){ return this.#den}
	get value(){
		if(this.numerator == 0) return 0;
		if(this.denominator == 1) return this.numerator;
		return this.numerator + "/" + this.denominator;
	}

	//Setters
	set numerator(newValue){
		try{
			if(isNaN(newValue*1)) throw fractError(1);
			this.#num = newValue;
			this.#normalize();
		}
		catch(error){
			console.error(error);
		}
	}
	set denominator(newValue){
		try{
			if(isNaN(newValue*1)) throw fractError(2);
			this.#den = newValue;
			this.#normalize();
		}
		catch(error){
			console.error(error);
		}
	}
	set value(s){
		var error;
		try{
			if(s == undefined || s == ""){ throw fractError(3) }
			else s += "";
			if(s.search("/") == -1){
				var br = s * 1, im = 1;
				if(isNaN(br)) {throw fractError(3) };
				this.#num = br;
				this.#den = im;
			}
			else{
				var parts = s.split("/");
				var br = parts[0] * 1;
				var im = parts[1] * 1;
				if(isNaN(br)) {throw fractError(1)}
				if(isNaN(im)) {throw fractError(2)}
				if(im == 0) {throw fractError(4)}
				this.#num = br;
				this.#den = im;
			}
			this.#normalize();
		}
		catch(error){
			console.error(error);
		}
	}

	//methods
	rec(){ return new Fraction(this.#den + "/" + this.#num);}
	toNumber(){ return this.#num / this.#den; }
	add(fract){
		try{
			if(!Math.isFraction(fract)) fract = new Fraction(fract);
			if(!Math.isFraction(fract)) throw fractError(5);

			var im = this.denominator * fract.denominator;
			var br = this.numerator * fract.denominator + this.denominator * fract.numerator;

			return new Fraction(br + "/" + im);
		}
		catch(error){
			console.error(error)
			return undefined;
		}
	}
	sub(fract){
		try{
			if(!Math.isFraction(fract)) fract = new Fraction(fract);
			if(!Math.isFraction(fract)) throw fractError(5);

			var im = this.denominator * fract.denominator;
			var br = this.numerator * fract.denominator - this.denominator * fract.numerator;

			return new Fraction(br + "/" + im);
		}
		catch(error){
			console.error(error)
			return undefined;
		}
	}
	mul(fract){
		try{
			if(!Math.isFraction(fract)) fract = new Fraction(fract);
			if(!Math.isFraction(fract)) throw fractError(5);

			var br = this.numerator * fract.numerator;
			var im = this.denominator * fract.denominator

			return new Fraction(br + "/" + im);
		}
		catch(error){
			console.error(error)
			return undefined;
		}
	}
	div(fract){
		try{
			if(!Math.isFraction(fract)) fract = new Fraction(fract);
			if(!Math.isFraction(fract)) throw fractError(5);

			var br = this.numerator * fract.denominator;
			var im = this.denominator * fract.numerator

			return new Fraction(br + "/" + im);
		}
		catch(error){
			console.error(error)
			return undefined;
		}
	}
	pow(num){
		if(!isNaN(eval(num)*1)) {num = eval(num)}
		else if(Math.isFraction(num)) num = num.toNumber();
		else throw fractError(5);

		var br = Math.pow(this.numerator, num);
		var im = Math.pow(this.denominator, num);

		return new Fraction(br + "/" + im);
	}
}

//Adding functions to Math object for manipulating Fraction objects.
Math.isFraction = (fract) => {//this method checks whether the given object is a Fraction object
	if(fract.constructor.name == "Fraction" && fract.denominator != undefined && fract.numerator != undefined) return true;
	return false;
}
Math.compareFracts = (a, op, b) => {//this method compares two fractions
	try{
		if(!Math.isFraction(a)) throw fractError(6);
		if(op != ">" && op != ">=" && op != "<" && op != "<=" && op != "==" && op != "!=") throw fractError(7);
		if(!Math.isFraction(b)) throw fractError(8);

		var p1 = a.numerator * b.denominator;
		var p2 = a.denominator * b.numerator;
		return eval(p1+op+p2);
	}
	catch(error){
		console.error(error)
		return undefined;
	}
}

Number.prototype.toFraction = function() {//converts number to Fraction object
	return new Fraction(this.valueOf());
};
String.prototype.toFraction = function() {//converts fraction given as string to Fraction object 
	return new Fraction(this)
};

//Errors
function fractError(errId){
	switch(errId){
		case 1: return "Fraction Error 1:\n    Numerator must be a number.";
		case 2: return "Fraction Error 2:\n    Denominator must be a number.";
		case 3: return "Fraction Error 3:\n    Value of a fraction must be given as string in 'a/b' format.";
		case 4: return "Fraction Error 4:\n    Denominator cann't be 0.";
		case 5: return `Fraction Error 5:\n    Given argument of add, sub, mul, div and pow methods must be a Fraction object, number or a fraction given as string in 'a/b' fromat.`;
		case 6: return "Fraction Error 6:\n    First argument of Math.compareFracts must be Fraction object.";
		case 7: return "Fraction Error 7:\n    Second argument of Math.compareFracts must logical comparison operator given as string.";
		case 8: return "Fraction Error 8:\n    Third argument of Math.compareFracts must be Fraction object.";
		default:;
	}
}