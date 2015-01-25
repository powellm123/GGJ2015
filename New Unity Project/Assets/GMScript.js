#pragma strict

var numberOfPlayers : int = 2;
var PlayerTurn : int = 1;
var MoveDone = false;
var PlayerDead : int = -1;
var Players : GameObject[];
var PlayerLose : int = -1;
var PlayerAlive: boolean[];

var playerPref : GameObject;
var areaPrefab: GameObject;
var junkPrefab: GameObject;
var spacePrefab: GameObject;
var p1marble: GameObject;
var p2marble: GameObject;

private var GameState : String;

function Start () {
	//var prefab = Resources.LoadAssetAtPath("Assets/Prefabs/Player.prefab", typeof(GameObject));
	Players = new GameObject[numberOfPlayers];
	PlayerAlive = new boolean[numberOfPlayers];
	for(var i = 0; i < numberOfPlayers; ++i)
	{
		Players[i] = Instantiate(playerPref, Vector3(-400 * i+(Mathf.Pow(-1, i+1)*100), -400 * i+(Mathf.Pow(-1, i+1)*100)), Quaternion.identity);
		Players[i].GetComponent(PlayerScript).PlayerNumber = i;
		PlayerAlive[i] = true;
	}
	//var areaPrefab = Resources.LoadAssetAtPath("Assets/Prefabs/Area.prefab", typeof(GameObject));
	Instantiate(areaPrefab, Vector3(-189, -187), Quaternion.identity);
	//Debug.Log("Done Loading");
	
	//var junkPrefab = Resources.LoadAssetAtPath("Assets/Prefabs/SpaceJunk.prefab", typeof(GameObject));
	//var spacePrefab = Resources.LoadAssetAtPath("Assets/Prefabs/SpaceAsteriod.prefab", typeof(GameObject));
	for(i = 0; i < 15; i++)
	{
		Instantiate(spacePrefab, Vector3.zero, Quaternion.identity);
		Instantiate(junkPrefab, Vector3.zero, Quaternion.identity);
	}
	
		var consolecontrollerobject = GameObject.FindWithTag ("Console");
		if(consolecontrollerobject != null)
		{
			var consolecontroller=consolecontrollerobject.GetComponent.<ConsoleController>();
		}
		if(consolecontroller==null)
		{
			Debug.Log("Cannot find 'ConsoleController' script");
		}
		
		consolecontroller.writeToScore1("0");
		consolecontroller.writeToScore2("0");
	
	
	GameState = "Playing";
	PlayerTurn = 0;
}

function Update () {
 if (Input.GetKey(KeyCode.Escape)) { Application.Quit(); }

	if(GameState == "Playing"){
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
			return i+1;
	}
	return 0;
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
	
	if(CountAlivePlayers() > 1)
		consolecontroller.writeToextra("Player " + (PlayerTurn+1).ToString() + "'s Turn");
	else{
		consolecontroller.writeToextra("Player " + GetAlivePlayer() + " Wins");
		GameState = "Win";
	}
}