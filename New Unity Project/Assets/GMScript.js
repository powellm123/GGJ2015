#pragma strict

var numberOfPlayers : int = 2;


function Start () {
	var prefab = AssetDatabase.LoadAssetAtPath("Assets/Player.prefab", typeof(GameObject));
	for(var i = 0; i < numberOfPlayers; ++i)
	{
		var player : GameObject = Instantiate(prefab, Vector3(-400 * i, -400 * i), Quaternion.identity);
		player.GetComponent(PlayerScript).PlayerNumber = i+1;
	}
	var areaPrefab = AssetDatabase.LoadAssetAtPath("Assets/Area.prefab", typeof(GameObject));
	Instantiate(areaPrefab, Vector3(-189, -187), Quaternion.identity);
	//Debug.Log("Done Loading");
	
	var junkPrefab = AssetDatabase.LoadAssetAtPath("Assets/SpaceJunk.prefab", typeof(GameObject));
	for(i = 0; i < 100; i++)
	{
		Instantiate(junkPrefab, Vector3.zero, Quaternion.identity);
	}
}

function Update () {

}