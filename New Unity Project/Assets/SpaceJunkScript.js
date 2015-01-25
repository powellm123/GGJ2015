#pragma strict

var HaveMovement : boolean = false;

private var x: float;
private var y: float;

function Start () {
	rigidbody2D.position.x = Random.Range(-706, 370);
	rigidbody2D.position.y = Random.Range(-460, 87);
	
	
}

function Update () {

	if(HaveMovement){
		
		x = Random.Range(-100, 100);
		y = Random.Range(-100, 100);
		rigidbody2D.AddForce(new Vector2(x, y));
		
		}
}