class Angle{
	#rad;
	#deg;

	constructor(val, type){
		try{
			var error;
			if(type != "rad" && type != "deg"){ error = new Error("t", 1); throw error}
			if(type == "rad") this.radian = val;
			else this.degree = val;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	set radian(val){
		try{
			var error;

			if(val == undefined || isNaN(val*1)){ error = new Error("t", 2); throw error} 

			this.#rad = val;
			this.#deg = val * 180 / Math.PI;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	set degree(val){
		try{
			var error;

			if(val == undefined || isNaN(val*1)){ error = new Error("t", 2); throw error} 

			this.#rad = val * Math.PI / 180;
			this.#deg = val;
		}
		catch(error){
			error = error.valueOf();
			alert(error);
			console.error(error);
		}
	}
	get radian(){
		return this.#rad;
	}
	get degree(){
		return this.#deg;
	}
	sin(){
		var n = this.radian;
		return Math.sin(n).toFixed(13) * 1;
	}
	cos(){
		var n = this.radian;
		return Math.cos(n).toFixed(13)*1;
	}
	tan(){
		var n = this.radian;
		return Math.tan(n).toFixed(13)*1;
	}
	ctg(){
		var n = this.radian;
		return (1/Math.tan(n)).toFixed(13);
	}
	sec(){
		var n = this.radian;
		return (1/Math.cos(n)).toFixed(13)*1;
	}
	csc(){
		var n = this.radian;
		return (1/Math.sin(n)).toFixed(13) * 1;
	}
	exs(){
		return this.sec() - 1;
	}
	exc(){
		return this.csc() - 1;
	}
	ver(){
		return 1 - this.cos();
	}
	cov(){
		return 1 + this.cos();
	}
	vec(){
		return 1 - this.sin();
	}
	cvc(){
		return 1 + this.sin();
	}
	crd(){
		var n = this.radian;
		return (2 * Math.sin(n / 2)).toFixed(13)*1;
	}
}
var inf = {
	error: "    Error 3: passed value must be a number.",
	asin(a){
		try{
			if(a == undefined || isNaN(a*1)) throw this.error;
			var rad = Math.asin(a) * 1
			if(rad < 0) rad += 2*Math.PI;
			return new Angle(rad, "rad");
		}
		catch(error){
			error = "Angle > invf > " + error;
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	acos(a){
		try{
			if(a == undefined || isNaN(a*1)) throw this.error;
			var rad = Math.acos(a) * 1
			if(rad < 0) rad += 2*Math.PI;
			return new Angle(rad, "rad");
		}
		catch(error){
			error = "Angle > invf:\n" + error;
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	atan(a){
		try{
			if(a == undefined || isNaN(a*1)) throw this.error;
			var rad = Math.tan(a) * 1
			return new Angle(rad, "rad");
		}
		catch(error){
			error = "Angle > invf:\n" + error;
			alert(error);
			console.error(error);
			return undefined;
		}
	},
	actg(a){
		return this.atan(1/a);
	},
	asec(a){
		return this.acos(1 / a);
	},
	acsc(a){
		return this.asin(1 / a);
	},
	aexs(a){
		return this.asec(a + 1)
	},
	aexc(a){
		return this.acsc(a + 1);
	},
	aver(a){
		return this.acos(1 - a);
	},
	acov(a){
		return this.acos(a - 1);
	},
	avec(a){
		return this.asin(1 - a);
	},
	acvc(a){
		return this.asin(a - 1);
	},
	acrd(a){
		return 2 * this.asin(a / 2);
	},
}