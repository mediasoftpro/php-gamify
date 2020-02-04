<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_badges_query extends main{
 
	public $id;
	public $title;
   	public $category_id;
	public $type;
	public $priority; 
	public $isdeduct; 
  	public $ilevel; 
	public $ishide;
			
	function __construct()
	{		
	    parent::__construct();
		$this->id = 0;
		$this->title = "";
		$this->category_id = 0;  
		$this->type = 0;
		$this->priority = 0;
		$this->isdeduct = 2;
		$this->ilevel = 0;
	    $this->ishide = 2; // 0: available, 1: hide, 2: both
	}
}
?>