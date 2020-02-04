<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_events_query extends main{
 
	public $id;
  	public $category_id; 
			
	function __construct()
	{		
	    parent::__construct();
		$this->id = 0;
		$this->category_id = 0;  
   
	}
}
?>