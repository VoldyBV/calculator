class Angle{
	#rad;
	#deg;
	#_angleType;
	#_type;

	constructor(value, angleType){
		try{
			switch(angleType){
				case 'rad': case 'deg': this.angleType = angleType;this.value = value;break;
				default: throw angleError('1');
			}
		}
		catch(error){
			this.#_type = undefined;
			console.error(error)
		}
	}

	set angleType(angleType){
		try{
			switch(angleType){
				case 'rad': case 'deg': this.#_angleType = angleType;break;
				default: throw angleError('1');
			}
		}
		catch(error){
			this.#_type = undefined;
			console.error(error);
		}
	}
	set value(value){
		try{
			if(value == undefined || isNaN(+value)) throw angleError('2');
			if(this.angleType == "rad"){
				this.#rad = value;
				this.#deg = value * 180 / Math.PI;
				this.#_type = "angle";
			}
			else if(this.angleType == "deg"){
				this.#deg = value;
				this.#rad = value * Math.PI / 180;
				this.#_type = "angle";
			}
			else throw angleError('1');
		}
		catch(error){
			console.error(error)
		}
	}
	get angleType() { return this.#_angleType }
	get value() {
		switch(this.angleType){
			case 'deg': return this.#deg;
			case 'rad': return this.#rad;
			default: return undefined;
		}
	}
	get type(){ return this.#_type; }
	getDegrees() { return this.#deg }
	getRadians() { return this.#rad }
	sin(){
		try{
			if(this.type == undefined) throw angleError('3.1');
			return Math.sin(this.#rad).toFixed(13)*1;
		}
		catch(error){
			console.error(error);
		}
	}
	cos(){
		try{
			if(this.type == undefined) throw angleError('3.2');
			return Math.cos(this.#rad).toFixed(13)*1;
		}
		catch(error){
			console.error(error);
		}
	}
	tan(){
		try{
			if(this.type == undefined) throw angleError('3.3');
			return Math.tan(this.#rad).toFixed(13)*1;
		}
		catch(error){
			console.error(error);
		}
	}
	csc(){
		try{
			if(this.type == undefined) throw angleError('3.4');
			return (1/this.sin()).toFixed(13);
		}
		catch(error){
			console.error(error);
		}
	}
	sec(){
		try{
			if(this.type == undefined) throw angleError('3.5');
			return (1/this.cos()).toFixed(13);
		}
		catch(error){
			console.error(error);
		}
	}
	ctg(){
		try{
			if(this.type == undefined) throw angleError('3.6');
			return (1/this.tan()).toFixed(13);
		}
		catch(error){
			console.error(error);
		}
	}
	exs(){
		try{
			if(this.type == undefined) throw angleError('3.7');
			return this.sec() - 1;
		}
		catch(error){
			console.error(error);
		}
	}
	exc(){
		try{
			if(this.type == undefined) throw angleError('3.8');
			return this.csc() - 1;
		}
		catch(error){
			console.error(error);
		}
	}
	ver(){
		try{
			if(this.type == undefined) throw angleError('3.9');
			return 1 - this.cos();
		}
		catch(error){
			console.error(error);
		}
	}
	cov(){
		try{
			if(this.type == undefined) throw angleError('3.10');
			return 1 + this.cos();
		}
		catch(error){
			console.error(error);
		}
	}
	vec(){
		try{
			if(this.type == undefined) throw angleError('3.11');
			return 1 - this.sin();
		}
		catch(error){
			console.error(error);
		}
	}
	cvc(){
		try{
			if(this.type == undefined) throw angleError('3.12');
			return 1 + this.sin();
		}
		catch(error){
			console.error(error);
		}
	}
	crd(){
		try{
			if(this.type == undefined) throw angleError('3.13');
			return (2 * Math.sin(this.#rad / 2)).toFixed(13)*1;
		}
		catch(error){
			console.error(error);
		}
	}
}

Math.isAngle = (angle) => {//this method checks whether the given object is an Angle object
	if(angle.type == "angle") return true;
	else return false;
}
Math.trigonometry = {};//adding "trigonometry" object to Math object

//Creating inverse trigonometric functions
Math.trigonometry.asin = function(number, type = "rad") {// inverse to sin
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.1');
		var angle = Math.asin(number);
		angle = new Angle(angle, "rad");
		angle.angleType = type;
		return angle;
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.acos = function(number, type = "rad") {// inverse to cos
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.2');
		var angle = Math.acos(number);
		angle = new Angle(angle, "rad");
		angle.angleType = type;
		return angle;
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.atan = function(number, type = "rad") {// inverse to tan
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.3');
		var angle = Math.atan(number);
		angle = new Angle(angle, "rad");
		angle.angleType = type;
		return angle;
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.acsc = function(number, type = "rad") {// inverse to csc
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.4');
		return this.asin(1/number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.asec = function(number, type = "rad") {// inverse to sec
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.5');
		return this.acos(1/number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.actg = function(number, type = "rad") {// inverse to ctg
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.6');
		return this.atan(1/number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.aexs = function(number, type = "rad") {// inverse to exs
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.7');
		return this.asec(1 + number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.aexc = function(number, type = "rad") {// inverse to exc
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.8');
		return this.acsc(1 + number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.aver = function(number, type = "rad") {// inverse to ver
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.9');
		return this.acos(1 - number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.acov = function(number, type = "rad") {// inverse to cov
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.10');
		return this.acos(number - 1, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.avec = function(number, type = "rad") {// inverse to vec
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.11');
		return this.sin(1 - number, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.acvc = function(number, type = "rad") {// inverse to cvc
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.12');
		return this.sin(number - 1, type)
	}
	catch(error){
		console.error(error);
	}
}
Math.trigonometry.acrd = function(number, type = "rad") {// inverse to crd
	if(type != "rad" && type != "deg") type = "rad";
	try{
		if(isNaN(number*1)) throw angleError('4.13');
		return this.sin(number - 1, type)
	}
	catch(error){
		console.error(error);
	}
}

//Errors
function angleError(errId){
	errId += ""
	lst_ang_err = errId;
	var msg;
	switch(errId){
		case '1': return "Angle Error 1:\n    Invalid value for property 'type' of Angle object";
		case '2': return "Angle Error 2:\n    Value of Angle object must be a Number.";
		case '3.1': msg = "Angle Error 3.1:\nError has occured at method 'sin':\n"; break;
		case '3.2': msg = "Angle Error 3.2:\nError has occured at method 'cos':\n"; break;
		case '3.3': msg = "Angle Error 3.3:\nError has occured at method 'tan':\n"; break;
		case '3.4': msg = "Angle Error 3.4:\nError has occured at method 'csc':\n"; break;
		case '3.5': msg = "Angle Error 3.5:\nError has occured at method 'sec':\n"; break;
		case '3.6': msg = "Angle Error 3.6:\nError has occured at method 'ctg':\n"; break;
		case '3.7': msg = "Angle Error 3.7:\nError has occured at method 'exs':\n"; break;
		case '3.8': msg = "Angle Error 3.8:\nError has occured at method 'exc':\n"; break;
		case '3.9': msg = "Angle Error 3.9:\nError has occured at method 'ver':\n"; break;
		case '3.10': msg = "Angle Error 3.10:\nError has occured at method 'cov':\n"; break;
		case '3.11': msg = "Angle Error 3.11:\nError has occured at method 'vec':\n"; break;
		case '3.12': msg = "Angle Error 3.12:\nError has occured at method 'cvc':\n"; break;
		case '3.13': msg = "Angle Error 3.13:\nError has occured at method 'crd':\n"; break;
		case '4.1': msg = "Angle Error 4.1:\nError has occured at Math.trigonometry.asin:\n"; break;
		case '4.2': msg = "Angle Error 4.2:\nError has occured at Math.trigonometry.acos:\n"; break;
		case '4.3': msg = "Angle Error 4.3:\nError has occured at Math.trigonometry.atan:\n"; break;
		case '4.4': msg = "Angle Error 4.4:\nError has occured at Math.trigonometry.acsc:\n"; break;
		case '4.5': msg = "Angle Error 4.5:\nError has occured at Math.trigonometry.asec:\n"; break;
		case '4.6': msg = "Angle Error 4.6:\nError has occured at Math.trigonometry.actg:\n"; break;
		case '4.7': msg = "Angle Error 4.7:\nError has occured at Math.trigonometry.aexs:\n"; break;
		case '4.8': msg = "Angle Error 4.8:\nError has occured at Math.trigonometry.aexc:\n"; break;
		case '4.9': msg = "Angle Error 4.9:\nError has occured at Math.trigonometry.aver:\n"; break;
		case '4.10': msg = "Angle Error 4.10:\nError has occured at Math.trigonometry.acov:\n"; break;
		case '4.11': msg = "Angle Error 4.11:\nError has occured at Math.trigonometry.avec:\n"; break;
		case '4.12': msg = "Angle Error 4.12:\nError has occured at Math.trigonometry.acvc:\n"; break;
		case '4.13': msg = "Angle Error 4.13:\nError has occured at Math.trigonometry.acrdS:\n"; break;
		default: return undefined;
	}
	if(errId >= 3.1 && errId < 4) return msg + "    Angle object is undefined.";
	if(errId >= 4.1 && errId < 5) return msg + "    First argument must be a Number.";
}