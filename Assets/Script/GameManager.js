#pragma strict

var cube : GameObject;
var size = 4;
var spacing = 2.0;
var startTiles = 2;

var grids : GridScript[,];
var cubes : GameObject[,];

function Start () {
	initGame();
}

function Update () {
	if(Input.GetKeyDown("left")){
		/*for(var i=1;i<size;i++){
		for(var j=0;j<size;j++){
			grids[i,j].left();
		}
		}*/
		//grids[0,0].left();
		for(var i=size-2;i>=0;i--){
		for(var j=0;j<size;j++){
			if(grids[i,j].getValue()==grids[i+1,j].getValue){
				grids[i,j].setValue(grids[i,j].getValue()*2);
				grids[i+1,j].setValue(0);
			}else if(grids[i,j].getValue()==0 && grids[i+1,j].getValue()!=0){
				grids[i,j].setValue(grids[i+1,j].getValue());
				grids[i+1,j].setValue(0);
			}
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("right")){
		for(i=1;i<size;i++){
		for(j=0;j<size;j++){
			if(grids[i,j].getValue()==grids[i-1,j].getValue){
				grids[i,j].setValue(grids[i,j].getValue()*2);
				grids[i-1,j].setValue(0);
			}else if(grids[i,j].getValue()==0 && grids[i-1,j].getValue()!=0){
				grids[i,j].setValue(grids[i-1,j].getValue());
				grids[i-1,j].setValue(0);
			}
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("up")){
		for(i=0;i<size;i++){
		for(j=1;j<size;j++){
			if(grids[i,j].getValue()==grids[i,j-1].getValue){
				grids[i,j].setValue(grids[i,j].getValue()*2);
				grids[i,j-1].setValue(0);
			}else if(grids[i,j].getValue()==0 && grids[i,j-1].getValue()!=0){
				grids[i,j].setValue(grids[i,j-1].getValue());
				grids[i,j-1].setValue(0);
			}
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("down")){
		for(i=0;i<size;i++){
		for(j=size-2;j>=0;j--){
			if(grids[i,j].getValue()==grids[i,j+1].getValue){
				grids[i,j].setValue(grids[i,j].getValue()*2);
				grids[i,j+1].setValue(0);
			}else if(grids[i,j].getValue()==0 && grids[i,j+1].getValue()!=0){
				grids[i,j].setValue(grids[i,j+1].getValue());
				grids[i,j+1].setValue(0);
			}
		}
		}
		randomAvailableCell();
	}
}

function initGame(){
	grids = new GridScript[size,size];
	cubes = new GameObject[size,size];
	for(var i=0;i<size;i++){
	for(var j=0;j<size;j++){
		cubes[i,j] = GameObject.Instantiate(cube,Vector3(i,j,0)*spacing,Quaternion.identity);//cubes[i,j] is an instant of cube
		cubes[i,j].AddComponent("GridScript");//bind the script
		grids[i,j] = cubes[i,j].gameObject.GetComponent.<GridScript>();
		grids[i,j].setPosition(i,j);
		grids[i,j].setValue(0);
	}
	}
	
	for(i=0;i<startTiles;i++){
		randomAvailableCell();
	}
}

function randomAvailableCell(){
	var obj = availableCells();
	var cellsX:Array = obj[0];
	var cellsY:Array = obj[1];
	var changeIndex = Random.Range(0,cellsX.length);
	grids[cellsX[changeIndex],cellsY[changeIndex]].setValue(2);
	//print(grids[cellsX[changeIndex],cellsY[changeIndex]].getX());
	//print(grids[cellsX[changeIndex],cellsY[changeIndex]].getY());
}

function availableCells(){
	var cellsX = new Array();
	var cellsY = new Array();
	for(var i=0;i<size;i++){
	for(var j=0;j<size;j++){
		if(grids[i,j].getValue()==0){
			cellsX.push(i);
			cellsY.push(j);
		}
	}
	}
	var cellsPosition = new Array();
	cellsPosition.push(cellsX);
	cellsPosition.push(cellsY);
	return cellsPosition;
}