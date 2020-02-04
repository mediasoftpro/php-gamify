<?php
if(!defined("INCLUDE_ROOT"))
   include_once("../../include/config.php");
include_once(INCLUDE_ROOT . "db.php");
include_once(INCLUDE_ROOT . "bll/utility.php");
class ga_badges_bll {

    //' Type
    //' 1: Badges
    //' 2: Rewards'
    //' 3: Levels'
    //' 4: Credits'
    //' 5: Points'
    private $tableName = "ga_badges";
	
	function add($fields, $queryanalysis = false)
	{
		$db = new DB;
		return $db->Insert($this->tableName, $fields, true, $queryanalysis);
	}
	
	function update($fields, $filters)
    {
	    $db = new DB;
		$mid = 0;
		$queryanalysis = false; // for query analysis & debuging
		$mid = $db->Update($this->tableName, $fields, $filters, $queryanalysis); 
		return true;
    }
	
	function update_icon($icon, $id)
    {
	   return $this->fetch_values(array("icon"=>$icon),array("id"=>$id));
    }
	
	function remove($id){
		$db = new DB;
		return $db->Delete($this->tableName, array('id' => $id));
	}

	function fetch_values($fields, $isadmin, $filters, $ismultiple = false, $queryonly=false)
    {
	    $db = new DB;
		$bind = $db->prepareBinds(NULL, $filters);
		if($fields == "")
		   $fields = "*"; // default fields
		   
		$query = "SELECT " . $fields . " from ".$this->tableName;
		$query .= $db->prepareFilters($filters);
		if(!$queryonly)
		{			
			$rec = $db->smartQuery(array(
			'sql' => $query,
			'par' => $bind,
			'ret' => 'obj'
			 ));
			 if(!$ismultiple)
			     return $rec->fetch(PDO::FETCH_OBJ);
		     else
			 {
				 $records = array();
				 while($r = $rec->fetch(PDO::FETCH_OBJ))
				 {	 
					 $records[] = $r;
				 }
				 return $records;
			 }
		}
		else
		{
			return $bind;
		}
	}

    function check($filters)
    {
		$db = new DB();
        $output = $db->Check($this->tableName, $filters);
		if($output > 0)
		  return true;
		else
		  return false;
    }
    
    function fetch_records($entity, $queryonly = false)
	{
		$db = new DB();
		$startindex = ($entity->pagenumber - 1) * $entity->pagesize;
				
        $logic = $this->filter_logic($entity);
        if($entity->fields == "")
		   $fields = "*"; // default fields
	    $query = "select " . $fields . " from " . $this->tableName . " " . $logic;
		$query .= " order by " . $entity->order;
		if(!$entity->loadall)
			$query .= " LIMIT " . $startindex . "," . $entity->pagesize;

		if(!$queryonly)
		{
			$db = new DB;
			$rec = $db->smartQuery(array(
			'sql' => $query,
			'par' => $this->bindsearchparams($entity),
			'ret' => 'obj'
			 ));
			 
			 $records = array();
			 while($r = $rec->fetch(PDO::FETCH_OBJ))
			 {	 
				 $records[] = $r;
			 }
			 return $records;
		}
		else
		{
		   return $query;
		}
    }

    // non cache version of count script
    function count_records($entity, $queryonly = false)
	{      
        $logic = $this->filter_logic($entity);
       
	    $query = "SELECT count(*) as total from ".$this->tableName." ".$logic;
      	
        if(!$queryonly)
		{
			$db = new DB;
			$total = $db->smartQuery(array(
			'sql' => $query,
			'par' => $this->bindsearchparams($entity),
			'ret' => 'col'
			 ));
			return $total;
		}
		else
		{
			// for query analysis purpose
			return $query;
		}
		
    }
      
	// core filter logic
    function filter_logic($entity)
    {
        $filters = array();
		if($entity->id > 0)
		    $filters[] = " id=:id";
		if($entity->category_id > 0)
		   $filters[] = " category_id=:category_id";
		if($entity->type > 0)
		   $filters[] = " type=:type";
        if($entity->isdeduct != 2)
		   $filters[] = " isdeduct=:isdeduct";
		if($entity->ilevel > 0)
		   $filters[] = " ilevel=:ilevel";
		if($entity->ishide != 2)
		   $filters[] = " ishide=:ishide";
		   
		$script = "";
        if(count($filters) > 0)
			$script .= ' WHERE ';
		
		$util = new utility();
		$script .=  implode(' AND ', $filters);
	  
		if($util->endsWith(trim($script),"WHERE"))
            $script = substr($script, $util->lastIndexOf($script,"WHERE") + 5) . ' ';
        return $script;
    }

    function bindsearchparams($entity)
    {
        $arr = array();
		if($entity->id > 0)
		   $arr['id'] = $entity->id;
		if($entity->category_id > 0)
		   $arr['category_id'] = $entity->category_id;
		if($entity->type > 0)
		   $arr['type'] = $entity->type;
        if($entity->isdeduct != 2)
		   $arr['isdeduct'] = $entity->isdeduct;
		if($entity->ilevel > 0)
		   $arr['ilevel'] = $entity->ilevel;
		if($entity->ishide != 2)
		   $arr['ishide'] = $entity->ishide;   
		   
        return $arr;
    }
	
	function get_max_level($term)
    {		
		$db = new DB();
        $query = "SELECT max(ilevel) as level from ".$this->tableName;
		$rec = $db->smartQuery(array(
		'sql' => $query,
		'ret' => 'obj'
		 ));
		 $obj = $rec->fetch(PDO::FETCH_OBJ);
		 return $obj->level + 1;
    }
}

?>