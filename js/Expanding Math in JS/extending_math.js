(
	() => {
		Math.sum = (arr) => {
			var SUM = 0;
			for(var i = 0;i < arr.length;i++){
				SUM += +arr[i];
			}
			return SUM;
		}
		Math.avg = (arr) => {
			return Math.sum(arr) / arr.length;
		}
		Math.gcf = (arr) => {
			var GCF = arr[0];

			function nzd(a, b){
				if(b == 0) return a;
				else return nzd(b, a%b);
			}

			for(var i = 1;i < arr.length;i++) GCF = nzd(GCF, arr[i]);

			return GCF;
		}
		Math.lcm = (arr) => {
			var LCM = arr[0];

			function nzd(a, b){
				if(b == 0) return a;
				else return nzd(b, a%b);
			}

			for(var i = 1;i < arr.length;i++) LCM = LCM * arr[i] / nzd(LCM, arr[i]);

			return LCM;
		}
		Math.getBaseLog = (x, y) => {
			return Math.log(y) / Math.log(x);
		}
		Math.negate = (num) => {
			return -num;
		}
		Math.rec = (num) => {
			return 1 / num;
		}
		Math.fixTo = (num, dec) => {
			num *= 1;
			return num.toFixed(dec);
		}
		Number.prototype.fact = function(){
			var a = 1;
			for(var i = 1;i <= this.valueOf();i++) a *= i;
			return a;
		}
		Number.prototype.subfact = function(){
			var br = 2, i = 1, sf = 0, f = this.fact();

			do{
				sf += f / br.fact() * i;
				i *= -1;
				br++;
			}while(br <= this);

			return sf;
		}
		Number.prototype.prime = function(){
			for(var i = 2;i <= this ** 0.5;i++) if(this % i === 0) return false;
			return true;
		}
		Number.prototype.perfect = function(){
			if(this < 2) return false;
			var a = 0;
			for(var i = 1;i <= this / 2;i++) if(this % i == 0) a += i;
			return a == this;
		}
		Number.prototype.armstrong = function(){
			if(this < 1) return false;

			var a = this.valueOf() + "";
			var s = 0;

			for(var i = 0;i < a.length;i++){
				s += (+a[i]) ** a.length;
			}

			return s == this;
		}
		Number.prototype.toFactors = function(){
			var f = "1";
			var a = this.valueOf();

			for(var i = 2;i <= a;i++){
				if(!i.prime()) continue;
				while(a % i == 0){
					f += " " + i;
					a /= i;
				}
			}

			return f.slice(2, f.length).split(" ");
		}
	}
)();