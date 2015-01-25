#pragma strict

private var HasFocus;
private var lastMousePos: Vector2;
var BelongsToWho : int;
 private var goodClick;
 
 var hit : AudioClip;
 
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

	var dis = Input.mousePosition - lastMousePos;
	if(dis.magnitude < 10){
		goodClick = false;
		return;
	}
	rigidbody2D.AddForce(35*  (dis));
	GameObject.Find("_GM").GetComponent(GMScript).MoveDone = true;
	
}
function OnCollisionEnter2D(coll: Collision2D)
{
	Debug.Log("Im Here");
	AudioSource.PlayClipAtPoint(hit, Vector2.zero);
}
