'use strict';

const button = document.querySelector('.button-menu');
const burg = document.querySelector('.burg');
const off = document.querySelector('.menu-off');
const menu = document.querySelector('.nav__menue')

function menuOnOff (e) {
	if (off.classList.contains('add')) {
		off.classList.remove('add')
		burg.classList.add('add')
		menu.classList.add('add2')
	} else {
		off.classList.add('add')
		burg.classList.remove('add')
		menu.classList.remove('add2')
	}
}

button.onclick = menuOnOff;

function oNoff (e) {
	menu.classList.remove('add2')
	burg.classList.remove('add')
	off.classList.add('add')
}

menu.onclick = oNoff;