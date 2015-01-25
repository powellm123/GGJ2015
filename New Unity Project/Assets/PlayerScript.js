#pragma strict

var PlayerNumber : int= 0;
var amountOfMarbles : int = 9;
var IsTurn : boolean;
var spacing : float = 5.0;

function Start ()
{
	var prefab : GameObject;
	if(PlayerNumber == 0)
		prefab = GameObject.Find("_GM").GetComponent(GMScript).p1marble; // Resources.LoadAssetAtPath("Assets/Prefabs/Marble_Water.prefab", typeof(GameObject));
	else{
		prefab = GameObject.Find("_GM").GetComponent(GMScript).p2marble; //Resources.LoadAssetAtPath("Assets/Prefabs/Marble_Light.prefab", typeof(GameObject));
	}
	for(var i = 0; i < amountOfMarbles; i++)
	{
		var pos = rigidbody2D.position + (Vector2(i, i) * spacing);
		var instance = Instantiate(prefab, pos, Quaternion.identity);
		instance.GetComponent(JSPyhsic).BelongsToWho = PlayerNumber;
	}
	
	

}

function Update ()
{
	
}

function OnGUI()
{

		var consolecontrollerobject = GameObject.FindWithTag ("Console");
		if(consolecontrollerobject != null)
		{
			var consolecontroller=consolecontrollerobject.GetComponent.<ConsoleController>();
		}
		if(consolecontroller==null)
		{
			Debug.Log("Cannot find 'ConsoleController' script");
		}
		
		if(PlayerNumber == 0)
			consolecontroller.writeToScore1(amountOfMarbles.ToString());
		else
			consolecontroller.writeToScore2(amountOfMarbles.ToString());
}