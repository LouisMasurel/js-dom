console.log("home.js");

var myP = document.querySelector("p");

// assigning a property
// myDom.onclick = function(){};

// calling a function
// myArray.forEach(function(){});

myP.onclick = function () {
  if (myP.innerHTML === "Goodbye!") {
    myP.innerHTML = "Hello!";
    myP.style.backgroundColor = "transparent";
  }
  else {
    myP.innerHTML = "Goodbye!";
    myP.style.backgroundColor = "yellow";
  }
};


var btn = document.querySelector(".image-switch");
btn.onclick = function () {
  var myImg = document.querySelector("img");

  if (btn.innerHTML === "Change To Image 1") {
    myImg.src = "https://media.giphy.com/media/MITM2xu1LmiQ/giphy.gif";
    btn.innerHTML = "Change To Image 2";
  }
  else {
    myImg.src = "https://media.giphy.com/media/l4Ki98rAuUXEPNj9u/giphy.gif";
    btn.innerHTML = "Change To Image 1";
  }
};


var otherBtn = document.querySelector(".add-h2");
var h2Count = 0;
otherBtn.onclick = function () {
  h2Count += 1;
  if (h2Count > 3) {
    otherBtn.innerHTML = "NO MORE";
    return;
  }

  var parentDiv = document.querySelector(".h2-container");
  // create an <h2> tag (empty and NOT attached to the page)
  var newH2 = document.createElement("h2");
  // fill the <h2> with the text "My New H2"
  newH2.innerHTML = "My New H2";
  // add the <h2> as a child of our <div>
  parentDiv.appendChild(newH2);
};


var myHeading = document.querySelector("h1");

myHeading.onclick = function () {
  var myBody = document.querySelector("body");
  myBody.removeChild(myHeading);
  // myHeading.remove();
};
