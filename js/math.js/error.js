class Error{
	value;
	constructor(type, num){
		switch(type){
			case "c": this.value = this.error_comp(num);break;
			case "f": this.value = this.error_fract(num);break;
			case "t": this.value = this.error_trig(num);break;
			case "m": this.value = this.error_math(num);break;
			default: this.value = "Error: undefined.";
		}
	}
	valueOf(){
		return this.value;
	}
	error_comp(num){
			var error = "";

			switch(num){
				case 1: error = "Complex:\n    Error 1: passed argument can not be undefined.";break;
				case 2: error = "Complex:\n    Error 2: passed string can not be empty.";break;
				case 3: error = "Complex:\n    Error 3: an incomprehensible value is passed.";break;
				case 4: error = "Complex > cop > pow:\n    Error 4.1: first argument must be a complex number.";break;
				case 5: error = "Complex > cop > pow:\n    Error 4.2: second argument must be a number.";break;
				case 6: error = "Complex > cop > solve:\n    Error 5.1: first argument must be a complex number.";break;
				case 7: error = "Complex > cop > solve:\n    Error 5.2: second argument be equal to +,-,* or /.";break;
				case 8: error = "Complex > cop > solve:\n    Error 5.3: third argument must be a complex number.";break;
				case 9: error = "Complex > cop > solve:\n    Error 5.4: you can not divide by 0.";break;
				default: error = "Error: undefined.";
			}

			return error;
	}
	error_fract(num){
			var error = "";

			switch(num){
				case 1: error = "Fraction:\n    Error 1: passed argument can not be undefined.";break;
				case 2: error = "Fraction:\n    Error 2: passed string can not be empty.";break;
				case 3: error = "Fraction:\n    Error 3: an incomprehensible value is passed.";break;
				case 4: error = "Fraction:\n    Error 4: denominator can not be equal to 0.";break;
				case 5: error = "Fraction > fop > solve:\n    Error 5.1: first argument must be a fraction.";break;
				case 6: error = "Fraction > fop > solve:\n    Error 5.2: second argument must be equal to +,-,* or /.";break;
				case 7: error = "Fraction > fop > solve:\n    Error 5.3: third argument must be a fraction.";break;
				case 8: error = "Fraction > fop > solve:\n    Error 5.4: you can not divide with 0.";break;
				case 9: error = "Fraction > fop > pow:\n    Error 6.1: first argument must be a fraction.";break;
				case 10: error = "Fraction > fop > pow:\n    Error 6.2: second argument must be a number.";break;
				case 11: error = "Fraction > fop > compare:\n    Error 7.1: first argument must be a fraction.";break;
				case 12: error = "Fraction > fop > compare:\n    Error 7.2: second argument must be equal to <,<=,>,>=,== or !=.";break;
				case 13: error = "Fraction > fop > compare:\n    Error 7.3: third argument must be a fraction.";break;
				default: error = "Error: undefined";
			}

			return error;
	}
	error_trig(num){
		var error;

		switch(num){
			case 1: error = "Angle:\n   Error 1: invalid type has been passed.";break;
			case 2: error = "Angle:\n   Error 2: passed value must be a number.";break;
			default: error = "Error: undefined";
		}

		return error;
	}
	error_math(num){
		var error;

		switch(num){
			case 1: error = "matf > sum:\n    Error 1.1: passed value must be defined.";break;
			case 2: error = "matf > sum:\n    Error 1.2: passed value must be an array.";break;
			case 3: error = "matf > sum:\n    Error 1.3: passed array must have at least 2 elements.";break;
			case 4: error = "matf > sum:\n    Error 1.4: elements in array must be numbers.";break;
			case 5: error = "matf > avg:\n    Error 2.1: passed value must be defined.";break;
			case 6: error = "matf > avg:\n    Error 2.2: passed value must be an array.";break;
			case 7: error = "matf > avg:\n    Error 2.3: passed array must have at least 2 elements.";break;
			case 8: error = "matf > avg:\n    Error 2.4: elements in array must be numbers.";break;
			case 9: error = "matf > gcf:\n    Error 3.1: passed value must be defined.";break;
			case 10: error = "matf > gcf:\n    Error 3.2: passed value must be an array.";break;
			case 11: error = "matf > gcf:\n    Error 3.3: passed array must have at least 2 elements.";break;
			case 12: error = "matf > gcf:\n    Error 3.4: elements in array must be numbers.";break;
			case 13: error = "matf > gcf:\n    Error 3.5: elements in array must be diffrent from 0.";break;
			case 14: error = "matf > lcm:\n    Error 4.1: passed value must be defined.";break;
			case 15: error = "matf > lcm:\n    Error 4.2: passed value must be an array.";break;
			case 16: error = "matf > lcm:\n    Error 4.3: passed array must have at least 2 elements.";break;
			case 17: error = "matf > lcm:\n    Error 4.4: elements in array must be numbers.";break;
			case 18: error = "matf > lcm:\n    Error 4.5: elements in array must be diffrent from 0.";break;
			case 19: error = "matf > fact:\n    Error 5.1: passed value must be defined.";break;
			case 20: error = "matf > fact:\n    Error 5.2: passed value must be a number.";break;
			case 21: error = "matf > fact:\n    Error 5.3: passed number must be non-negative.";break;
			case 22: error = "matf > subfact:\n    Error 6.1: passed value must be defined.";break;
			case 23: error = "matf > subfact:\n    Error 6.2: passed value must be a number.";break;
			case 24: error = "matf > subfact:\n    Error 6.3: passed number must be non-negative.";break;
			case 25: error = "matf > log:\n    Error 7.1: passed value must be defined";break;
			case 26: error = "matf > log:\n    Error 7.2: passed value must be a number.";break;
			case 27: error = "matf > log:\n    Error 7.3: passed number must be positive.";break;
			case 28: error = "matf > pow:\n    Error 8.1: passed value must be defined";break;
			case 29: error = "matf > pow:\n    Error 8.2: passed value must be a number.";break;
			case 30: error = "matf > root:\n    Error 9.1: passed value must be defined";break;
			case 31: error = "matf > root:\n    Error 9.2: passed value must be a number.";break;
			case 32: error = "matf > root:\n    Error 9.3: second number can not be equal to 0.";break;
			case 33: error = "matf > isPrime:\n    Error 10.1: passed value must be a defined.";break;
			case 34: error = "matf > isPrime:\n    Error 10.2: passed value must be a number.";break;
			case 35: error = "matf > isArmstrong:\n    Error 11.1: passed value must be a defined.";break;
			case 36: error = "matf > isArmstrong:\n    Error 11.2: passed value must be a number.";break;
			case 37: error = "matf > isPerfect:\n    Error 12.1: passed value must be a defined.";break;
			case 38: error = "matf > isPerfect:\n    Error 12.2: passed value must be a number.";break;
			case 39: error = "matf > toFactors:\n    Error 13.1: passed value must be a defined.";break;
			case 40: error = "matf > toFactors:\n    Error 13.2: passed value must be a number.";break;
			case 41: error = "matf > toFactors:\n    Error 13.3: passed value must be a positive number.";break;
			case 42: error = "matf > toFactors:\n    Error 13.4: passed value must be a positive whole number.";break;
			default: break;
		}

		return error;
	}
}