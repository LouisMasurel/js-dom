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
