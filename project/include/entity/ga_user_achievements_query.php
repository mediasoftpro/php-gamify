<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_user_achievements_query extends main{
 
	public $id;
	public $userid;
	public $type;
				
	function __construct()
	{		
	    parent::__construct();
		$this->id = 0;
		$this->userid = 0;
		$this->type = 0;
	}
}
?>