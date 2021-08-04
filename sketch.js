function setup() {
  createCanvas(800, 800);

  factory();
}

function draw() {
  background("black");
}
function Prime() {
  var a = 12;
  var b = 0;
  for (i = 1; i <= a; i++) {
    if (a % i == 0) {
      b = b + 1;
    }
  }
  if (b == 2) {
    console.log(a + " is a prime number");
  } else {
    console.log(a + " is not a prime number");
  }
}
function eleven() {
  var a = 0;
  for (i = 1; i <= 10; i++) {
    a = a * 10 + 1;
    console.log(a);
  }
}
function five() {
  var a = 0;
  for (i = 1; i <= 10; i++) {
    a = a * 10 + 5;
    console.log(a);
  }
}
function onetwothreeya() {
  var a = 0;
  for (i = 1; i <= 9; i++) {
    a = a * 10 + i;
    console.log(a);
  }
}
function factory() {
  var a = 1;
  for (i = 7; i >= 1; i--) {
    a = a * i;
  }
  console.log(a);
}
