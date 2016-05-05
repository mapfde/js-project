function myFunction() {
	var c = document.getElementById("stage");
var ctx = c.getContext("2d");
ctx.fillStyle = "#021561";
ctx.fillRect(0, 0, 480, 360);
goToXY(20,20);
setPenSizeTo(1);
//setPenColorTo("#F3FF05");
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
penUp ()
for (var Sprung = 1; Sprung <= 15; Sprung++) {
	var randomX = Math.floor(Math.random() * 361) -180
	var randomY = 		Math.floor(Math.random() * 271) -135
	goToXY(randomX,randomY);
  setPenColorTo(getRandomColor());
  penDown();
	for (var zahl = 1; zahl <= 5; zahl++) {
		move (50);
		turnRight (144); 
  }
  penUp ();
}

}

function Flower() {
	goToXY(20,20);
setPenSizeTo(1);
setPenColorTo("#9C0303");
penDown();
for (var zahl = 1; zahl <= 25; zahl++) {
	for (var kreis = 1; kreis <= 360; kreis++) {
		move (1);
		turnRight (1); 
  }
	turnLeft (15);
}

}
function Clearall(){
	var c = document.getElementById("stage");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 300, 150);
ctx.clearRect(0, 0, 480, 360);
}



