
 var suckedIn: AudioClip;
function Start () {

}

function Update () {
}

function OnTriggerEnter2D(other : Collider2D)
{
	if(other.tag == "Player"){
		GameObject.Find("_GM").GetComponent(GMScript).PlayerDead = other.GetComponent(JSPyhsic).BelongsToWho;
		Destroy(other.gameObject);
		AudioSource.PlayClipAtPoint(suckedIn, Vector2.zero);
	}
	if(other.tag == "SpaceJunk"){
		Destroy(other.gameObject);	
	}
}