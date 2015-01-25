
function Start () {

}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag == "Player"){
		GameObject.Find("_GM").GetComponent(GMScript).PlayerDead = other.GetComponent(JSPyhsic).BelongsToWho;
		Destroy(other.gameObject);
	}
	if(other.tag == "SpaceJunk"){
		Destroy(other.gameObject);	
	}
}