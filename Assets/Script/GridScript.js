﻿#pragma strict

var speed : float = 1.0;
var rotationSpeed : float = 10.0;
var gap = 2;
var x : int;
var y : int;
var v : int;//value

function Start () {

}

function Update () {
	/*var left_right : float = Input.GetAxis("Vertical")*speed;
	var up_down : float = Input.GetAxis("Horizontal")*speed;
	var fore_back : float = Input.GetAxis("Forward")*speed;
	var rotation : float = Input.GetAxis("Rotate")*rotationSpeed;
	
	left_right *= Time.deltaTime;
	up_down *= Time.deltaTime;
	fore_back *= Time.deltaTime;
	rotation *= Time.deltaTime;
	
	transform.Translate(up_down,left_right,fore_back);
	transform.Rotate(0,rotation,0);*/
	
	/*if(Input.GetKeyDown("left")){
		transform.Translate(-gap,0,0);
	}else if(Input.GetKeyDown("right")){
		transform.Translate(gap,0,0);
	}else if(Input.GetKeyDown("up")){
		transform.Translate(0,gap,0);
	}else if(Input.GetKeyDown("down")){
		transform.Translate(0,-gap,0);
	}*/
	
	/*if(v==0){
		
		//renderer.material.color = Color.clear;
	}else if(v==2){
		transform.Rotate(0,5,0);
		//renderer.material.color = Color.red;
	}else if(v==4){
		transform.Rotate(0,60,0);
		//renderer.material.color = Color.green;
	}*/
	transform.Rotate(0,3*v,0);
}

function setGap(g : float){
	gap = g;
}

function setPosition(tmpx: int, tmpy: int){
	x = tmpx;
	y = tmpy;
}

function setValue(tmpv: int){
	v = tmpv;
}

function getX():int{
	return x;
}

function getY():int{
	return y;
}

function getValue():int{
	return v;
}

//for test
function print(){
	print(v);
}

function left(){
	transform.Translate(-gap,0,0);
}