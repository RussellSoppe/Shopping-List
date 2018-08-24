var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var d = document.getElementsByClassName("dbutton");


for (var i = 0; i < li.length; i++) {
	strikeOut(i);
}

function strikeOut(i){ 
	li[i].addEventListener("click", function(){
		
	li[i].classList.toggle("done");
	})
	
	//how can I use buttons already in html to delete the lines they are in?
		//li[i].removeChild(btn);
		//ul.removeChild(li[i]);
	
}

//code from DOM lesson
function inputLength() {
	return input.value.length;
}

//create new item w/ functioning buttons and strikethrough actions
function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", addDone);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//toggle strikethrough
	function addDone(){
		li.classList.toggle("done");
	}
	//createButton();
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Delete");
	btn.appendChild(t);
	li.appendChild(btn);
	btn.addEventListener("click", deleteLine);
	//delete buttons and text
	function deleteLine(){
		ul.removeChild(li);
		li.removeChild(btn);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//try console.log first to see if everything is connecting before trying to delete items :)
// function deleteLine2(){
// 	ul.removeChild(li);
// 	li.removeChild(button);
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//d.addEventListener("click", deleteLine2)

