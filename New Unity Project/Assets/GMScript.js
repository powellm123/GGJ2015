#pragma strict

var numberOfPlayers : int = 2;
var PlayerTurn : int = 1;
var MoveDone = false;
var PlayerDead : int = -1;
var Players : GameObject[];
var PlayerLose : int = -1;
var PlayerAlive: boolean[];

function Start () {
	var prefab = AssetDatabase.LoadAssetAtPath("Assets/Prefabs/Player.prefab", typeof(GameObject));
	Players = new GameObject[numberOfPlayers];
	PlayerAlive = new boolean[numberOfPlayers];
	for(var i = 0; i < numberOfPlayers; ++i)
	{
		Players[i] = Instantiate(prefab, Vector3(-400 * i, -400 * i), Quaternion.identity);
		Players[i].GetComponent(PlayerScript).PlayerNumber = i;
		PlayerAlive[i] = true;
	}
	var areaPrefab = AssetDatabase.LoadAssetAtPath("Assets/Prefabs/Area.prefab", typeof(GameObject));
	Instantiate(areaPrefab, Vector3(-189, -187), Quaternion.identity);
	//Debug.Log("Done Loading");
	
	var junkPrefab = AssetDatabase.LoadAssetAtPath("Assets/Prefabs/SpaceJunk.prefab", typeof(GameObject));
	var spacePrefab = AssetDatabase.LoadAssetAtPath("Assets/Prefabs/SpaceAsteriod.prefab", typeof(GameObject));
	for(i = 0; i < 50; i++)
	{
		Instantiate(junkPrefab, Vector3.zero, Quaternion.identity);
		Instantiate(spacePrefab, Vector3.zero, Quaternion.identity);
	}
	
	PlayerTurn = 0;
}

function Update () {
	if(MoveDone)
	{
		PlayerTurn = (PlayerTurn +1) % (numberOfPlayers);
		MoveDone = false;
	}
	if(PlayerDead > -1)
	{
		Players[PlayerDead].GetComponent(PlayerScript).amountOfMarbles -= 1;
		if(Players[PlayerDead].GetComponent(PlayerScript).amountOfMarbles == 0){
			PlayerAlive[PlayerDead] = false;
			Debug.Log("Player died");
		}
		PlayerDead = -1;
	}
}
function CountAlivePlayers()
{
	var count = 0;
	for(var i = 0; i < numberOfPlayers; i++)
	{
		if(PlayerAlive[i])
			count++;
	}
	
	return count;
}

function GetAlivePlayer()
{
	for(var i = 0; i < numberOfPlayers; i++)
	{
		if(PlayerAlive[i])
			return i;
	}
	return 0;
}
function OnGUI()
{
	if(CountAlivePlayers() > 1)
		GUI.TextField(Rect(100, 0, 100, 100), "Player " + (PlayerTurn+1).ToString() + " Turn");
	else{
		GUI.TextField(Rect(100, 0, 100, 100), "Player " + GetAlivePlayer() + " Wins");
	}
}