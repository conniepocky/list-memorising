list = []

function createNewItem(groceryItem) {
    var newItem = document.createElement("li");
    var newText = document.createTextNode(groceryItem);
    newItem.appendChild(newText);
    var position = document.getElementsByTagName("ul")[0];
    position.appendChild(newItem);
}

function pressed() {
  var inputItem = userInput.value;
  list.push(userInput.value)
  console.log(list)
  createNewItem(inputItem);
}


function done() {
  localStorage.setItem("list", JSON.stringify(list));
  location.href = "next.html";
}