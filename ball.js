//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball6 = document.getElementById("ball6");
var ball7 = document.getElementById("ball7");
var ball8 = document.getElementById("ball8");
var ball9 = document.getElementById("ball9");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 450;
  var Ymin = 0;
  var Ymax = 450;
  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball2.style.left = positionX + "px";
    // ball2.style.top = positionY + "px";
    ball3.style.left = positionX + "px";
    ball3.style.top = positionY + "px";
    ball4.style.top = positionY + "px";
    ball5.style.left = positionX + "px";
    ball6.style.top = positionY + "px";
    ball7.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    // ball.style.top = positionY + "px";
    ball3.style.left = positionX + "px";
    // ball3.style.top = positionY + "px";
    ball4.style.left = positionX + "px";
    ball8.style.left = positionX + "px";
    ball9.style.top = positionY + "px";
  }

  if (positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === Ymin) {
    reverse = !reverse;
  }
}




// This call the moveBall function every 100ms
// setInterval(moveBall, 100);

setInterval(moveBall, 1000);
