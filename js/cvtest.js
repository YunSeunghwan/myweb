// var canvas = document. getElementById("myCanvas");
// var context = canvas.getContext("2d");

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(100,100);
// context.lineTo(200,0);
// context.lineTo(300,100);
// context.lineTo(400,0);
// context.lineTo(500,100);
// context.lineWidth = 2;
// context.stroke();

var canvas = document. getElementById("myCanvas");
var context = canvas.getContext("2d");
var image = new Image();

image.src = "../img/1111.jpg"; // 상위 디렉토리의 그림을 어떻게 불러올까?

image.onload = funciton() {
	context.drawImage(image, 0,0);
}
