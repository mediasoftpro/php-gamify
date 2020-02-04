<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_events_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["id"] = $item["id"];
    $fields["title"] = $item["title"];
	$fields["description"] = $item["description"];
    $fields["event_key"] = $item["event_key"];
	$fields["category_id"] = $item["category_id"];
}

$obj = new ga_events_bll();
$recordID = 0;
if($fields["id"] > 0) {
	// update
	$filter = array("id" => $fields["id"]);
	$update_items = array();
	if($fields["title"] != "")
	  $update_items["title"] = $fields["title"];
	if($fields["description"] != "")
	  $update_items["description"] = $fields["description"];  
	if($fields["event_key"] != "")
	  $update_items["event_key"] = $fields["event_key"];  
	if($fields["category_id"] != "")
	  $update_items["category_id"] = $fields["category_id"];  
   
	 $obj->update($update_items,$filter);
} else {
	// insert
	$recordID = $obj->add($fields);
}

echo json_encode(array('status' => 'success', 'message' => "record added", "id" => $recordID));

?>