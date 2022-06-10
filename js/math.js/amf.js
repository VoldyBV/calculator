//Aditional math functions
var matf = {
	sum(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 1); throw error}
			if(a.length == undefined){ error = new Error("m", 2); throw error}
			if(a.length < 2){ error = new Error("m", 3); throw error}

			var Sum = 0;

			for(var i = 0, l = a.length;i < l;i++){
				a[i] *= 1;
				if(isNaN(a[i])){{ error = new Error("m", 4); throw error}}
				Sum += a[i];
			}
			
			return Sum;
		}
		catch(error){
			return this.abort(error);
		}
	},
	avg(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 5); throw error}
			if(a.length == undefined){ error = new Error("m", 6); throw error}
			if(a.length < 2){ error = new Error("m", 7); throw error}

			var Sum = 0;

			for(var i = 0, l = a.length;i < l;i++){
				a[i] *= 1;
				if(isNaN(a[i])){{ error = new Error("m", 8); throw error}}
				Sum += a[i];
			}
			
			return Sum/a.length;
		}
		catch(error){
			return this.abort(error);
		}
	},
	gcf(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 9); throw error}
			if(a.length == undefined){ error = new Error("m", 10); throw error}
			if(a.length < 2){ error = new Error("m", 11); throw error}

			for(var i = 0, l = a.length;i < l;i++){
				a[i] *= 1;
				if(isNaN(a[i])){{ error = new Error("m", 12); throw error}}
				if(a[i] == 0){{ error = new Error("m", 13); throw error}}
			}

			function nzd(a, b){
				if(b == 0) return a;
				else return nzd(b, a%b);
			}

			GCF = a[0];

			for(var i = 1, l = a.length;i < l;i++){
				GCF = nzd(GCF, a[i]);
			}

			return GCF;
		}
		catch(error){
			return this.abort(error);
		}
	},
	lcm(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 14); throw error}
			if(a.length == undefined){ error = new Error("m", 15); throw error}
			if(a.length < 2){ error = new Error("m", 16); throw error}

			for(var i = 0, l = a.length;i < l;i++){
				a[i] *= 1;
				if(isNaN(a[i])){{ error = new Error("m", 17); throw error}}
				if(a[i] == 0){{ error = new Error("m", 18); throw error}}
			}

			function nzd(a, b){
				if(b == 0) return a;
				else return nzd(b, a%b);
			}

			LCM = a[0];

			for(var i = 1, l = a.length;i < l;i++){
				LCM = LCM * a[i] / nzd(LCM, a[i]);
			}

			return LCM;
		}
		catch(error){
			return this.abort(error);
		}
	},
	log(a, b){
		try{
			var error;
			if(a == undefined || b == undefined){ error = new Error("m", 25); throw error}
			if(isNaN(a*1) || isNaN(b*1)){ error = new Error("m", 26); throw error}
			if(a <= 0 || b <= 0){ error = new Error("m", 27); throw error}

			return (Math.log(b) / Math.log(a)).toFixed(11)*1;
		}
		catch(error){
			return this.abort(error);
		}
	},
	fix(a, b){
		try{
			var error;
			if(a == undefined || b == undefined){ error = new Error("m", 25); throw error}
			if(isNaN(a*1) || isNaN(b*1)){ error = new Error("m", 26); throw error}

			return a.toFixed(b) * 1;
		}
		catch(error){
			return this.abort(error);
		}
	},
	fact(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 19); throw error}
			if(isNaN(a*1)){ error = new Error("m", 20); throw error}
			if(a < 0){ error = new Error("m", 21); throw error}

			var f = 1;
			a = Math.floor(a);

			while(a > 1) f *= a--;

			return f;
		}
		catch(error){
			return this.abort(error);
		}
	},
	subfact(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 22); throw error}
			if(isNaN(a*1)){ error = new Error("m", 23); throw error}
			if(a < 0){ error = new Error("m", 24); throw error}

			var br = 2, i = 1, sf = 0, f = this.fact(a);

			do{
				sf += f / this.fact(br) * i;
				i *= -1;
				br++;
			}while(br <= a);

			return sf;
		}
		catch(error){
			return this.abort(error);
		}
	},
	neg(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 19); throw error}
			if(isNaN(a*1)){ error = new Error("m", 20); throw error}

			return a * -1;
		}
		catch(error){
			return this.abort(error);
		}
	},
	rec(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 19); throw error}
			if(isNaN(a*1)){ error = new Error("m", 20); throw error}
			if(a < 0){ error = new Error("m", 21); throw error}

			return "(1/" + a + ")";
		}
		catch(error){
			return this.abort(error);
		}
	},
	isPrime(a){
		try{
			var error;
			if(a == undefined){ error = new Error("m", 33); throw error}
			if(isNaN(a*1)){ error = new Error("m", 34); throw error}
			if(a <= 0) return false;
			if(a - Math.floor(a) > 0) return false;

			for(var i = 2, l = Math.sqrt(a);i < l;i++){
				if(a % i == 0) return false;
			}

			return true;
		}
		catch(error){
			return this.abort(error);
		}
	},
	isArmstrong(a){
		try{
			var error;
			if(a == undefined) error = new Error("m", 35);
			if(isNaN(a*1)){ error = new Error("m", 36);}
			if(error != undefined) throw error;
			
			if(a < 0) return false;
			
			var s = 0, n = a;
			var l = a.length;
			a = a.split('');
			for(var i = 0;i <l;i++) s += a[i] ** 3;
			
			return s == n; 
		}
		catch(error){
			return this.abort(error);
		}
	},
	isPerfect(a){
		
		try{
			var error;
			if(a == undefined) error = new Error("m", 37);
			if(isNaN(a*1)){ error = new Error("m", 38);}
			if(error != undefined) throw error;
			
			if(a < 0) return false;
			
			var s = 0;
			
			for(var i = 1;i <= a / 2;i++){
				if(a % i != 0) continue;
				s += i;
			}
			
			return s == a; 
		}
		catch(error){
			return this.abort(error);
		}
	},
	toFactors(a){
		try{
			var error;
			if(a == undefined) error = new Error("m", 39);
			if(isNaN(a*1)){ error = new Error("m", 40);}
			if(a < 0) error = new Error("m", 41);
			if(a - Math.floor(a) > 0) error = new Error("m", 41);
			if(error != undefined) throw error = new Error("m", 42);
			
			var f = "1";
			
			for(var i = 2;i <= a;i++){
				if(this.isPrime(i) == false) continue;
				while(a % i == 0){
					f += " " + i;
					a /= i;
				}
			}
			
			return f.slice(2, f.length).split(' ');
		}
		catch(error){
			return this.abort(error);
		}
	},
	abort(error){
		error = error.valueOf();
		alert(error);
		console.error(error);
		return undefined;
	
	}
}