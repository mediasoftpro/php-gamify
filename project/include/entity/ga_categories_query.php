<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_categories_query extends main{
 
	public $id;
	public $type;
				
	function __construct()
	{		
	    parent::__construct();
		$this->id = 0;
		$this->type = 0;
	}
}
?>