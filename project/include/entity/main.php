<?php

// Entity class with general attributes with shared behaviours in many classes.
class main {
	
	public $order; 
	public $term; 
	public $month;
	public $year;
    public $datefilter;
	public $pagenumber;
	public $pagesize;
	public $loadall; 
	public $fields;
	
	function __construct()
	{
		$this->order = "id desc";
		$this->term = "";
		$this->month = 0;
		$this->year = 0;
		$this->datefilter = 0;
		$this->pagenumber = 1;
		$this->pagesize = 20;
		$this->loadall = false;
		$this->fields = "";
	}
}
?>