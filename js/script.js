
// Kodilla task 9.6 

var add = document.getElementById('js-addElem');
var list = document.getElementById('js-list');
var listElements = document.getElementsByTagName('li');

function addList() {

	var listNum = listElements.length;
	list.innerHTML += '<li>item ' +(listNum)+ '</li>';
}

add.addEventListener('click', addList);