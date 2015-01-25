
 var outb: AudioClip;
function OnTriggerExit2D (other : Collider2D)
{
	if(other.tag == "Player")
	{
		GameObject.Find("_GM").GetComponent(GMScript).PlayerDead = other.GetComponent(JSPyhsic).BelongsToWho;
		Destroy(other.gameObject);
		AudioSource.PlayClipAtPoint(outb, Vector2.zero);
	}
}
