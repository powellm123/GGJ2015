#pragma strict


function OnTriggerExit2D (other : Collider2D)
{
if(other.tag == "Player")
	Destroy(other.gameObject);
}
