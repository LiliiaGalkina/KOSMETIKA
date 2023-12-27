let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

//----------------------------------------

let text = document.querySelectorAll('.otziv__text');
let btn = document.querySelectorAll('.btn');

for(let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
		text[i].classList.toggle('open');
	})
}