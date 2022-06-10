(
	() => {
		window.addEventListener("keydown", function(event){
			var key = event.key;
			var numbers = this.document.querySelectorAll(".number");
			var operators = this.document.querySelectorAll(".operations");
			if(event.keyCode == 8){
				this.document.querySelector("#bckspc").click();
			}
			else if(event.keyCode == 13){
				this.document.querySelector("#eval").click();
			}
			else{
				numbers.forEach((elem) => {
					if(elem.innerHTML == key) elem.click();
				});
				
				operators.forEach((elem) => {
					if(elem.innerHTML == key) elem.click();
				});
				
			}
		});
	}
)()
var Dozvoljeno = true;
var which = [0, 0, 0];
var max = [3, 5, 3]
var fje = [
	["Fact", "Subf", "Neg", "Rec"],
	["Sum", "Avg", "Gcf", "Lcm", "Log", "Fix"],
	["Prim", "Arms", "Perf", "Fact"],
];
var titles = [
	["Get number's factiorial", "Get number's subfactorial", "Negate the number", "Get reciprocal value of an number"],
	[
		"Calculate the sum of given numbers", 
		"Calculate the average value of given numbers", 
		"Find greatest common factor of given numbers", 
		"Find the lowest common multiple of given numbers",
		"Get logarithm",
		"Round a number to a certain number of decimals"
	],
	["Check if number is prime", "Check if number is armstrong", "Check if number is perfect", "Get factors of given numbers"]
]
var Izraz = "";
function Switch(id){if(Dozvoljeno){
	var elem = document.getElementById("sw" + id);

	if(which[id] >= max[id])	which[id] = 0;
	else	which[id]++;

	elem.innerHTML = fje[id][which[id]];
	elem.title = titles[id][which[id]];
}}
function Disable() {
	var elems = document.getElementsByClassName("enabled");
	var add = document.getElementById("add");

	for(var i = 0;i < elems.length;i++){
		elems[i].classList.add("disabled");
	}

	add.classList.add("enabled");
	add.classList.remove("disabled");
	elems = document.getElementsByClassName("disabled");
	
	for(var i = 0;i < elems.length;i++){
		elems[i].classList.remove("enabled");
	}

	Dozvoljeno = false;
}
function Enable(){
	var elems = document.getElementsByClassName("disabled");
	var add = document.getElementById("add");

	for(var i = 0;i < elems.length;i++){
		elems[i].classList.add("enabled");
	}

	add.classList.add("disabled");
	add.classList.remove("enabled");
	elems = document.getElementsByClassName("enabled");
	
	for(var i = 0;i < elems.length;i++){
		elems[i].classList.remove("disabled");
	}

	Dozvoljeno = true;
}
function Titles_Of_Trigonometry_Buttons(css_class){
	var elems = document.querySelectorAll("."+css_class);
	elems.forEach((item) => {
		var what;

		switch(item.innerHTML){
			case 'sin': case 'asin': what = "sine";break;
			case 'cos': case 'acos': what = "cosine";break;
			case 'crd': case 'acrd': what = "chord";break;
			case 'tan': case 'atan': what = "tangent";break;
			case 'ctg': case 'actg': what = "cotangent";break;
			case 'sec': case 'asec': what = "secant";break;
			case 'csc': case 'acsc': what = "cosecant";break;
			case 'exs': case 'aexs': what = "ex secant";break;
			case 'exc': case 'aexc': what = "ex cosecant";break;
			case 'ver': case 'aver': what = "versine";break;
			case 'cov': case 'asin': what = "coversine";break;
			case 'vec': case 'asin': what = "vercosine";break;
			case 'cvc': case 'asin': what = "coversine";break;
			default: break;
		}
		if(css_class == "inv-trigonometry") what = "arcus " + what;
		item.title = "Calculate " + what;
	});
}
window.addEventListener("load", function() { Titles_Of_Trigonometry_Buttons("trigonometry")})