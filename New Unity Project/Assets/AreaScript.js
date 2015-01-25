
function OnTriggerExit2D (other : Collider2D)
{
	if(other.tag == "Player")
	{
		GameObject.Find("_GM").GetComponent(GMScript).PlayerDead = other.gameObject.GetComponent(JSPyhsic).BelongsToWho;
		Destroy(other.gameObject);
	}
}
