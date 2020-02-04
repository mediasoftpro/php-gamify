<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_badge_event_query extends main{
 
	public $event_id;
	public $badge_id;
   			
	function __construct()
	{		
	    parent::__construct();
		$this->event_id = 0;
		$this->badge_id = 0;
	}
}
?>