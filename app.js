let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let show = document.querySelector(".gen");
const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number = [1,2,3,4,5,6,7,8,9,0];
const chars = ['@','#'];
let b;
let a_length = a.length;
let char_length = chars.length;
let number_length = number.length;
btn.addEventListener('click',() => {
	b = "";
	let value = Number(input.value);
	if (value > 40){
		show.textContent = "Too long";
	}
	else if (value < 10){
		show.textContent = "Too small";
	}
	else {
	for(var i = 0; i<value-3; i++){
	let r = Math.floor(Math.random()*Math.floor(a_length));
	b = b + a[r];
	}
	for (var j = 0; j<2;j++){
	let nran = Math.floor(Math.random()*Math.floor(number_length));
	b = b + number[nran];
	}
	let rchar = Math.floor(Math.random()*Math.floor(char_length));
	b = b + chars[rchar];
	show.textContent = b;
	}
});
