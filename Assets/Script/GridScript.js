#pragma strict

var speed : float = 1.0;
var rotationSpeed : float = 10.0;
var gap = 2;

var x : int;
var y : int;
var v : int;//value
var obj : GameObject;

var mergeForm : int = 0;//1:has been merged;0:has not been merged

function Start () {
	obj = GameObject.Find("Cube");
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
	
	if(v==0){
		renderer.material.color = Color.clear;
	}else if(v==2){
		//transform.Rotate(0,5,0);
		renderer.material.color = Color.red;
	}else if(v==4){
		//transform.Rotate(0,60,0);
		renderer.material.color = Color.green;
	}else if(v==8){
		//transform.Rotate(0,60,0);
		renderer.material.color = Color.blue;
	}else if(v==16){
		//transform.Rotate(0,60,0);
		renderer.material.color = Color.black;
	}
	//transform.Rotate(0,3*v,0);
}

function setX(tmpx : int){
	x = tmpx;
}

function setY(tmpy : int){
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

function changeGameObject(){
	var tempObject : GameObject;
	if(v == 0){
		tempObject = GameObject.Find("Cube");
	}else if(v == 2){
		tempObject = GameObject.Find("Cube2");
	}else if(v == 4){
		tempObject = GameObject.Find("Cube4");
	}else if(v == 8){
		tempObject = GameObject.Find("Cube8");
	}else if(v == 16){
		tempObject = GameObject.Find("Cube16");
	}else if(v == 32){
		tempObject = GameObject.Find("Cube32");
	}else if(v == 64){
		tempObject = GameObject.Find("Cube64");
	}else if(v == 128){
		tempObject = GameObject.Find("Cube128");
	}else if(v == 256){
		tempObject = GameObject.Find("Cube256");
	}else if(v == 512){
		tempObject = GameObject.Find("Cube512");
	}else if(v == 1024){
		tempObject = GameObject.Find("Cube1024");
	}else if(v == 2048){
		tempObject = GameObject.Find("Cube2048");
	}
	Destroy(obj);
	obj = Instantiate(tempObject, Vector3(x,y,0)*gap,Quaternion.identity);
}

function getGameObject():GameObject{
	return obj;
}

function setMergeForm(merge : int){
	mergeForm = merge;
}

function getMergeForm(){
	return mergeForm;
}

//for test
function print(){
	print(v);
}

function move(distX:int, distY:int, distZ:int){
	obj.transform.Translate(distX,distY,distZ);
}