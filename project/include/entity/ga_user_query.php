<?php
include_once(INCLUDE_ROOT . "entity/main.php");

class ga_user_query extends main{
 
	public $userid;
	public $username;
   	public $email;
	public $status;
				
	function __construct()
	{		
	    parent::__construct();
		$this->userid = 0;
		$this->username = "";
		$this->email = "";  
		$this->status = 0;
	}
}
?>