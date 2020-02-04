<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_badges_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["id"] = $item["id"];
    $fields["title"] = $item["title"];
	$fields["description"] = $item["description"];
    $fields["icon"] = $item["icon"];
	
	$fields["icon_sm"] = $item["icon_sm"];
    $fields["icon_lg"] = $item["icon_lg"];
	$fields["category_id"] = $item["category_id"];
    $fields["type"] = $item["type"];
	
	$fields["icon_css"] = $item["icon_css"];
    $fields["priority"] = $item["priority"];
	$fields["credits"] = $item["credits"];
    $fields["xp"] = $item["xp"];
	
	$fields["price"] = $item["price"];
    $fields["notification"] = $item["notification"];
	$fields["isdeduct"] = $item["isdeduct"];
    $fields["ilevel"] = $item["ilevel"];
	
	$fields["ishide"] = $item["ishide"];
}
$obj = new ga_badges_bll();
$recordID = 0;
if($fields["id"] > 0) {
	// update
	$filter = array("id" => $fields["id"]);
	$update_items = array();
	if($fields["title"] != "")
	  $update_items["title"] = $fields["title"];
	if($fields["description"] != "")
	  $update_items["description"] = $fields["description"];  
	if($fields["icon"] != "")
	  $update_items["icon"] = $fields["icon"];  
	if($fields["icon_sm"] != "")
	  $update_items["icon_sm"] = $fields["icon_sm"];  
    if($fields["icon_lg"] != "")
	  $update_items["icon_lg"] = $fields["icon_lg"];  
	if($fields["category_id"] != "")
	  $update_items["category_id"] = $fields["category_id"];  
	if($fields["type"] != "")
	  $update_items["type"] = $fields["type"];  
	if($fields["icon_css"] != "")
	  $update_items["icon_css"] = $fields["icon_css"];  
	if($fields["priority"] != "")
	  $update_items["priority"] = $fields["priority"];  
	if($fields["credits"] != "")
	  $update_items["credits"] = $fields["credits"];  
	if($fields["xp"] != "")
	  $update_items["xp"] = $fields["xp"];  
    if($fields["price"] != "")
	  $update_items["price"] = $fields["price"];  
	if($fields["notification"] != "")
	  $update_items["notification"] = $fields["notification"];  
	if($fields["isdeduct"] != "")
	  $update_items["isdeduct"] = $fields["isdeduct"];  
	if($fields["ilevel"] != "")
	  $update_items["ilevel"] = $fields["ilevel"];  
	if($fields["ishide"] != "")
	  $update_items["ishide"] = $fields["ishide"];  
	 $obj->update($update_items,$filter);
} else {
	// insert
	$recordID = $obj->add($fields);
}

echo json_encode(array('status' => 'success', 'message' => "record added", "id" => $recordID));

?>