let time;
let frameCountBuffer = 0;
let fps = 0;

const CANVAS_W = 960;
const CANVAS_H = 1280;

const GRID_SIZE = 64;

const DEBUG = true;
const DEBUG_VIEW_X = GRID_SIZE*2;
const DEBUG_VIEW_Y = GRID_SIZE*2;
const DEBUG_VIEW_H = GRID_SIZE;
const DEBUG_TEXT_SIZE = 32;

let countTouchStart = 0;
let countTouchEnd = 0;
let countTouchMove = 0;

function preload() {
}

function setup() {
	createCanvas(CANVAS_W, CANVAS_H);
	time = millis();
}
function draw() {
	background(48);
	let current = millis();
	if ( (current-time)>=1000 ){
		time += 1000;
		fps = frameCount - frameCountBuffer;
		frameCountBuffer = frameCount;
	}
	if (DEBUG){
		stroke(128);
		strokeWeight(1);
		for (let i=0; i<CANVAS_H/GRID_SIZE; i++){
			line(0, i*GRID_SIZE, CANVAS_W, i*GRID_SIZE);
		}
		for (let i=0; i<CANVAS_W/GRID_SIZE; i++){
			line(i*GRID_SIZE, 0, i*GRID_SIZE, CANVAS_H);
		}
	}
	fill(255);
	stroke(255);
	textSize(DEBUG_TEXT_SIZE);
	noStroke();
	let debugY = DEBUG_VIEW_Y;
	text('fps:'+fps, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('mousePressed: '+countTouchStart, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('mouseReleased: '+countTouchEnd, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('mouseDragged: '+countTouchMove, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('mouseIsPressed: '+mouseIsPressed, DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('mouseX: '+mouseX.toFixed(2)+' mouseY: '+mouseY.toFixed(2), DEBUG_VIEW_X, debugY);
	debugY += DEBUG_VIEW_H;
	text('touch num: '+touches.length, DEBUG_VIEW_X, debugY);
	for (let i=0; i<touches.length; i++){
		debugY += DEBUG_VIEW_H;
		text('X: '+touches[i].x.toFixed(2)+' Y: '+touches[i].y.toFixed(2), DEBUG_VIEW_X, debugY);
	}
}
function mousePressed() {
	countTouchStart++;
/*
	let tp = [];
	for (let i=0; i<touches.length;i++) {
		if (tp[i]==null){
			tp[i] = [];
		}
		tp[i].x = touches[i].x;
		tp[i].y = touches[i].y;
	}
	let tx, ty;
	if (tp[0]!=null){
		tx = tp[0].x;
		ty = tp[0].y;
	}else{
		tx = mouseX;
		ty = mouseY;
	}
*/
}
function mouseReleased() {
	countTouchEnd++;
}
function mouseDragged() {
	countTouchMove++;
/*
	let tp = [];
	for (let i=0; i<touches.length;i++) {
		if (tp[i]==null){
			tp[i] = [];
		}
		tp[i].x = touches[i].x;
		tp[i].y = touches[i].y;
	}
	let tx, ty;
	if (tp[0]!=null){
		tx = tp[0].x;
		ty = tp[0].y;
	}else{
		tx = mouseX;
		ty = mouseY;
	}
*/
	return false;
}