<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_level_associate_query extends main {
 
	public $id;
	public $levelid;
   	public $rewardid;
	public $description;
		
	function __construct()
	{	
	    parent::__construct();	
		$this->id = 0;
		$this->levelid = 0;
		$this->rewardid = 0;  
		$this->description = "";
	}
}
?>