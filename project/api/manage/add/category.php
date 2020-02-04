<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_categories_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["id"] = $item["id"];
    $fields["title"] = $item["title"];
	$fields["description"] = $item["description"];
    $fields["shorttitle"] = $item["shorttitle"];
	$fields["type"] = $item["type"];
    $fields["priority"] = $item["priority"];
}
$obj = new ga_categories_bll();
$recordID = 0;
if($fields["id"] > 0) {
	// update
	$filter = array("id" => $fields["id"]);
	$update_items = array();
	if($fields["title"] != "")
	  $update_items["title"] = $fields["title"];
	if($fields["description"] != "")
	  $update_items["description"] = $fields["description"];  
	if($fields["shorttitle"] != "")
	  $update_items["shorttitle"] = $fields["shorttitle"];  
	if($fields["type"] != "")
	  $update_items["type"] = $fields["type"];  
    if($fields["priority"] != "")
	  $update_items["priority"] = $fields["priority"];  
	
	 $obj->update($update_items,$filter);
} else {
	// insert
	$recordID = $obj->add($fields);
}

echo json_encode(array('status' => 'success', 'message' => "record added", "id" => $recordID));

?>