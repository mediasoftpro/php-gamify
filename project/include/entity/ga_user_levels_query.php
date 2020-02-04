<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_user_levels_query extends main{
 
	public $userid;
	public $levels;
   	public $points;
	public $credits;
				
	function __construct()
	{		
	    parent::__construct();
		$this->userid = 0;
		$this->levels = "";
		$this->points = 0;  
		$this->credits = 0;
	}
}
?>