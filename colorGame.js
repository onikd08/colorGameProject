var numberOfColors = 6;
var colors = [];
var targetColor;

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var targetColorDisplay = document.getElementById("targetColorName");
var messageDisplay = document.getElementById("message");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var newGameButton = document.getElementById("reset");

function main() {
  generateSquares();
  buttonFunction();
  reset();
}

main();

function generateSquares() {
  for (var i = 0; i < numberOfColors; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function() {
      var clickedColor = this.style.backgroundColor;
      console.log(clickedColor,targetColor);
      if (clickedColor===targetColor) {
        messageDisplay.textContent = "Correct!";
        changeAllColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        newGameButton.textContent = "Play again?"
      }else {
        messageDisplay.textContent = "Try again!";
        this.style.backgroundColor = "#232323";
      }
    })
  }
}

function buttonFunction() {
  newGameButton.addEventListener("click",function() {
    reset();
    this.textContent = "New Game";
  })

  easyButton.addEventListener("click",function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfColors = 3;
    reset();
    newGameButton.textContent = "New Game";
  });

  hardButton.addEventListener("click",function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numberOfColors = 6;
    reset();
    newGameButton.textContent = "New Game";

  });
}

function reset() {
  colors = addRandomColors(numberOfColors);
  targetColor = pickTargetColor();
  targetColorDisplay.textContent = targetColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}


function changeAllColors(colorName) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorName;
  }
}


function addRandomColors(num) {
  var colorArray = [];
  for (var i = 0; i < num; i++) {
    colorArray.push(generateRandomColors());
  }
  return colorArray;
}

function generateRandomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var total = "rgb(" + r + ", " + g + ", " + b + ")";
  return total;
}

function pickTargetColor() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}
