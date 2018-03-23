console.log("food.js");

var myBtn = document.querySelector(".add-btn");
myBtn.onclick = function () {
  // get the text from the input
  var myInput = document.querySelector(".food-input");
  if (myInput.value === "") {
    return;
  }

  // create the new <li> (empty)
  var newItem = document.createElement("li");
  // set the contents (text + button) of the <li>
  newItem.innerHTML = myInput.value + " <button>Delete</button>";

  // select the container for the new <li>
  var theList = document.querySelector(".food-list");

  // add the new <li> to the container
  theList.appendChild(newItem);

  // delete the text from the input
  myInput.value = "";
};


var deleteButtons = document.querySelectorAll(".food-list button");

deleteButtons.forEach(function (oneButton) {
  // add a click event to each button
  oneButton.onclick = function () {
    var clickedButton = event.target;
    var clickedLi = clickedButton.parentNode;

    var theList = document.querySelector(".food-list");
    theList.removeChild(clickedLi);
    // clickedLi.remove();
  };
});
