function sayTheThing() {
  var thingToSay = "bean-o-rama!";
  alert(thingToSay);
  return 10;
}

var myCoolBeansElement = document.getElementById("coolbeans");

function spillTheBeans(item, targetElement) {
  targetElement.innerHTML = item;
}

function addThem(x, y) {
  return x + y + 10;
}

var counter = 0;

function loop() {
  counter = counter + 1;
  spillTheBeans(counter, myCoolBeansElement);
  setTimeout(loop, 2000);
}

loop();