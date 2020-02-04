<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_badges_event_query extends main{
 
	public $event_id;
	public $badge_id;
   			
	function __construct()
	{		
		$this->event_id = 0;
		$this->badge_id = 0;
	}
}
?>