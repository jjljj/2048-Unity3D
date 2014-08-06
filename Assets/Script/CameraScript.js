#pragma strict

var speed : float = 1.0;
var rotationSpeed : float = 10.0;


function Start () {

}

function Update () {
	var left_right : float = Input.GetAxis("CCV")*speed;
	var up_down : float = Input.GetAxis("CCH")*speed;
	var fore_back : float = Input.GetAxis("CCF")*speed;
	var rotation : float = Input.GetAxis("Jump")*rotationSpeed;
	
	left_right *= Time.deltaTime;
	up_down *= Time.deltaTime;
	fore_back *= Time.deltaTime;
	rotation *= Time.deltaTime;
	
	transform.Translate(left_right,up_down,fore_back);
	transform.Rotate(0,rotation,0);
}