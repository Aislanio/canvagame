
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let left = 65,up = 87,rigth = 68,down = 83;
let  siz = 50;
let  posx = 50,posy =50;
let objColor= "#00f";
let blockx = canvas.width /2 -siz;
let blocky = canvas.height /2 -siz;

let mvlLeft = mvUp = mvRigth = mvDowm = false;


function updateBlock(){
	if(mvlLeft){
		posx--;
	}
	if(mvRigth){
		posx++;
	}
	if(mvUp){
		posy--;
	}
	if (mvDowm) {
		posy++;
	}
}
function colide(){
	if (posx + siz > blockx && posx < blockx + siz && posy + siz > blocky && posy < blocky +siz) {
		objColor = "#f00"
	}else{
		objColor = "#00f"
	}
}
window.addEventListener("keydown",keydownHandler,false);
window.addEventListener("keyup",keyupHandler,false);
function keydownHandler(e){
	let key = e.keyCode;
	switch(key){
		case up:
		mvUp = true;
		break;
		case rigth:
		 mvRigth = true;
		break;
		case left:
		mvlLeft  = true;
		break;
		case down :
		mvDowm = true;
		break;
	}

}
function keyupHandler(e){
	let key = e.keyCode;
	switch(key){
		case up:
		mvUp = false;
		break;
		case rigth:
		 mvRigth = false;
		break;
		case left:
		mvlLeft  = false;
		break;
		case down :
		mvDowm = false;
		break;
	}

}

function update(){
	updateBlock();
	colide();
};
function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = "#000"
	ctx.fillRect(blockx,blocky,siz,siz)
	ctx.fillStyle = objColor;
	ctx.fillRect(posx,posy,siz,siz);
	
}
function loop(){

	update();
	draw();
	window.requestAnimationFrame(loop,canvas);
};
loop();