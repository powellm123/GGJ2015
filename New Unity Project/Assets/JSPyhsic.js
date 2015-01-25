#pragma strict

private var HasFocus;
private var lastMousePos: Vector2;
var BelongsToWho : int;
 private var goodClick;
function Start ()
{
	rigidbody2D.drag = 1;
}

function Update()
{
}

function OnMouseDown()
{
if(GameObject.Find("_GM").GetComponent(GMScript).PlayerTurn == BelongsToWho)
{
	lastMousePos = Input.mousePosition;
	goodClick = true;
	}
else
	goodClick = false;
}

function OnMouseDrag()
{
}

function OnMouseUp()
{
	if(!goodClick) return;

	rigidbody2D.AddForce(35*  (Input.mousePosition - lastMousePos));
	GameObject.Find("_GM").GetComponent(GMScript).MoveDone = true;
	
}

//function OnGUI() {
//		var e : Event = Event.current;
//		if(e.button == 0 && e.isMouse){
//			Debug.Log("Left Click");
//		} else if(e.button == 1) {
//			Debug.Log("Right Click");
//		} else if (e.button == 2) {
//			Debug.Log("Middle Click");	
//		} else if (e.button > 2) {
//			Debug.Log("Another button in the mouse clicked");
//		}
//	}

function FirstTry()
{
		// Get the horizontal and vertical axis.
		// By default they are mapped to the arrow keys.
//		// The value is in the range -1 to 1
//		var translation : float = Input.GetAxis ("Horizontal")* speed;
//		var rotation : float = Input.GetAxis ("Vertical") * speed;
//		
//		// Make it move 10 meters per second instead of 10 meters per frame...
//		translation *= Time.deltaTime;
//		rotation *= Time.deltaTime;
//		
//		// Move translation along the object's z-axis
//		rigidbody2D.transform.Translate (translation, 0, 0);
//		// Rotate around our y-axis
//		rigidbody2D.transform.Translate (0, rotation, 0);
//
//		var r = (attractedTo.transform.position - transform.position);
//		var newdir : Vector2;
//		var g = (strengthOfAttraction * mass / r.magnitude);
//		newdir = g * r;
//		//newdir = attractedTo.transform.position - transform.position;
//		newdir *= Time.deltaTime;
//		rigidbody2D.velocity = newdir;
}
