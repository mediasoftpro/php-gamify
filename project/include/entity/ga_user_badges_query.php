<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_user_badges_query extends main{
 
	public $badge_id;
	public $userid;
   	public $type;
			
	function __construct()
	{		
	    parent::__construct();
		$this->badge_id = 0;
		$this->userid = 0;  
		$this->type = 0;
	}
}
?>