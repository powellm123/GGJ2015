#pragma strict


function OnTriggerExit2D (other : Collider2D)
{
	Debug.Log("On Exit");
		Destroy(other.gameObject);
}
