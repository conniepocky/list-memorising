//Uses a Function to create new items on the list!
function createNewItem(groceryItem) {
    var newItem = document.createElement("li");
    var newText = document.createTextNode(groceryItem);
    newItem.appendChild(newText);
    var position = document.getElementsByTagName("ul")[0];
    position.appendChild(newItem);
}
list = []

//sets variables for adding list items
var userInput = document.getElementById("userInput");
var submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function() {
  var inputItem = userInput.value;
  list.push(userInput.value)
  console.log(list)
  createNewItem(inputItem);
}, false);


function done() {
  location.href = "next.html";
}