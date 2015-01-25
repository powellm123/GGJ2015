#pragma strict

var PlayerNumber : int= 0;
var amountOfMarbles : int = 9;
var IsTurn;
var spacing : float = 5.0;

function Start ()
{
	var prefab = AssetDatabase.LoadAssetAtPath("Assets/Marble.prefab", typeof(GameObject));
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