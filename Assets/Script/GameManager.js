#pragma strict

var cube : GameObject;
var size = 4;
var startTiles = 2;
var gap = 2.0;

var grids : GridScript[,];

function Start () {
	initGame();
}

function Update () {
	checkKeyDownState();
	
}

function initGame(){
	grids = new GridScript[size,size];
	for(var i=0;i<size;i++){
	for(var j=0;j<size;j++){
		grids[i,j] = new GridScript();
		grids[i,j].setX(i);
		grids[i,j].setY(j);
		grids[i,j].setValue(0);
		grids[i,j].changeGameObject();
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
	grids[cellsX[changeIndex],cellsY[changeIndex]].changeGameObject();
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

function checkKeyDownState(){
	var i : int;
	var j : int;
	if(Input.GetKeyDown("left")){
		//merge or remove bubbles
		for(j=0;j<size;j++){
		for(i=size-2;i>=0;i--){
			if(grids[i+1,j].getValue()!=0 && grids[i,j].getMergeForm()==0 
			&& grids[i+1,j].getMergeForm()==0 && grids[i,j].getValue()==grids[i+1,j].getValue()){
			//grids[i,j]<-grids[i+1,j]
				//move
				grids[i+1,j].move(-gap,0,0);
				//merge
				grids[i,j].setValue(grids[i,j].getValue()+grids[i+1,j].getValue());
				grids[i+1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i+1,j].changeGameObject();
				//mergeForm
				grids[i,j].setMergeForm(1);
			}else if(grids[i,j].getValue()==0 && grids[i+1,j].getValue()!=0){
			//grids[i+1,j] take place of grids[i,j]
				//move
				grids[i+1,j].move(-gap,0,0);
				//merge
				grids[i,j].setValue(grids[i+1,j].getValue());
				grids[i+1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i+1,j].changeGameObject();
			}
		}
		}
		//remove remain bubbles
		for(j=0;j<size;j++){
		for(i=size-2;i>=0;i--){
			if(grids[i,j].getValue()==0 && grids[i+1,j].getValue()!=0){
			//grids[i+1,j] take place of grids[i,j]
				//move
				grids[i+1,j].move(-gap,0,0);
				//merge
				grids[i,j].setValue(grids[i+1,j].getValue());
				grids[i+1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i+1,j].changeGameObject();
			}
		}
		}
		for(j=0;j<size;j++){
		for(i=0;i<size;i++){
			grids[i,j].setMergeForm(0);
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("right")){
		//merge or remove bubbles
		for(j=0;j<size;j++){
		for(i=1;i<size;i++){
			if(grids[i-1,j].getValue()!=0 && grids[i,j].getMergeForm()==0 
			&& grids[i-1,j].getMergeForm()==0 && grids[i,j].getValue()==grids[i-1,j].getValue()){
			//grids[i-1,j]->grids[i,j]
				//move
				grids[i-1,j].move(gap,0,0);
				//merge
				grids[i,j].setValue(grids[i,j].getValue()+grids[i-1,j].getValue());
				grids[i-1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i-1,j].changeGameObject();
				//mergeForm
				grids[i,j].setMergeForm(1);
			}else if(grids[i,j].getValue()==0 && grids[i-1,j].getValue()!=0){
			//grids[i-1,j] take place of grids[i,j]
				//move
				grids[i-1,j].move(gap,0,0);
				//merge
				grids[i,j].setValue(grids[i-1,j].getValue());
				grids[i-1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i-1,j].changeGameObject();
			}
		}
		}
		//remove remain bubbles
		for(j=0;j<size;j++){
		for(i=1;i<size;i++){
			if(grids[i,j].getValue()==0 && grids[i-1,j].getValue()!=0){
			//grids[i+1,j] take place of grids[i,j]
				//move
				grids[i-1,j].move(gap,0,0);
				//merge
				grids[i,j].setValue(grids[i-1,j].getValue());
				grids[i-1,j].setValue(0);
				grids[i,j].changeGameObject();
				grids[i-1,j].changeGameObject();
			}
		}
		}
		for(j=0;j<size;j++){
		for(i=0;i<size;i++){
			grids[i,j].setMergeForm(0);
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("up")){
		//merge or remove bubbles
		for(j=0;j<size;j++){
		for(i=1;i<size;i++){
			if(grids[j,i-1].getValue()!=0 && grids[j,i].getMergeForm()==0 
			&& grids[j,i-1].getMergeForm()==0 && grids[j,i].getValue()==grids[j,i-1].getValue()){
				//move
				grids[j,i-1].move(0,gap,0);
				//merge
				grids[j,i].setValue(grids[j,i].getValue()+grids[j,i-1].getValue());
				grids[j,i-1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i-1].changeGameObject();
				//mergeForm
				grids[j,i].setMergeForm(1);
			}else if(grids[j,i].getValue()==0 && grids[j,i-1].getValue()!=0){
				//move
				grids[j,i-1].move(0,gap,0);
				//merge
				grids[j,i].setValue(grids[j,i-1].getValue());
				grids[j,i-1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i-1].changeGameObject();
			}
		}
		}
		//remove remain bubbles
		for(j=0;j<size;j++){
		for(i=1;i<size;i++){
			if(grids[j,i].getValue()==0 && grids[j,i-1].getValue()!=0){
				//move
				grids[j,i-1].move(0,gap,0);
				//merge
				grids[j,i].setValue(grids[j,i-1].getValue());
				grids[j,i-1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i-1].changeGameObject();
			}
		}
		}
		for(j=0;j<size;j++){
		for(i=0;i<size;i++){
			grids[i,j].setMergeForm(0);
		}
		}
		randomAvailableCell();
	}else if(Input.GetKeyDown("down")){
		//merge or remove bubbles
		for(j=0;j<size;j++){
		for(i=size-2;i>=0;i--){
			if(grids[j,i+1].getValue()!=0 && grids[j,i].getMergeForm()==0 
			&& grids[j,i+1].getMergeForm()==0 && grids[j,i].getValue()==grids[j,i+1].getValue()){
				//move
				grids[j,i+1].move(0,-gap,0);
				//merge
				grids[j,i].setValue(grids[j,i].getValue()+grids[j,i+1].getValue());
				grids[j,i+1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i+1].changeGameObject();
				//mergeForm
				grids[j,i].setMergeForm(1);
			}else if(grids[j,i].getValue()==0 && grids[j,i+1].getValue()!=0){
				//move
				grids[j,i+1].move(0,-gap,0);
				//merge
				grids[j,i].setValue(grids[j,i+1].getValue());
				grids[j,i+1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i+1].changeGameObject();
			}
		}
		}
		//remove remain bubbles
		for(j=0;j<size;j++){
		for(i=size-2;i>=0;i--){
			if(grids[j,i].getValue()==0 && grids[j,i+1].getValue()!=0){
				//move
				grids[j,i+1].move(0,-gap,0);
				//merge
				grids[j,i].setValue(grids[j,i+1].getValue());
				grids[j,i+1].setValue(0);
				grids[j,i].changeGameObject();
				grids[j,i+1].changeGameObject();
			}
		}
		}
		for(j=0;j<size;j++){
		for(i=0;i<size;i++){
			grids[i,j].setMergeForm(0);
		}
		}
		randomAvailableCell();
	}
}