var button = document.getElementById("addBtn");
var input = document.getElementById("userInput");
var list = document.querySelector("ul");

function cleartext(input){ //function to clear text of input field that has been passed through as arguements
	input.value = "";
}

function inputTrim(input){ //returns value after using trim function on user input to confirm it is a valid text and not just white spaces.
	return input.value.trim();
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		list.appendChild(li);
		cleartext(input);//clears text before exiting function
}

function addItemToListAfterClick(){

	if(inputTrim(input) !== "")
	{
		createListElement();
	}
}

function addItemToListAfterKeyPress(event){

	if(inputTrim(input) !== "" && event.code === "Enter")
	{
		createListElement();
	}
}

button.addEventListener("click", addItemToListAfterClick);

input.addEventListener("keypress", addItemToListAfterKeyPress);