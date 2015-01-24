#pragma strict

var attractedTo : GameObject;
var strengthOfAttraction : float = 5.0f;
private var speed : Vector2;

function Start ()
{
	speed = new Vector2(1, -105);
}

function Update ()
{
	var direction = attractedTo.transform.position - transform.position;
	rigidbody2D.AddForce(speed);
	rigidbody2D.AddForce(strengthOfAttraction * direction);
}
