#pragma strict

var score1 : UI.Text;
var score2 : UI.Text;
var extra : UI.Text;

function Start () {

		score1.text = "0";
		score2.text = "0";
}
	
	function writeToScore1(message : String)
	{
		score1.text = message;
	}
	function writeToScore2(message : String)
	{
		score2.text = message;
	}
	
	function writeToextra(message : String)
	{
		extra.text = message;
	}
	
	// Update is called once per frame
	function Update () 
	{
		
	}