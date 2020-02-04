<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/bll/ga_badges_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["id"] = $item["id"];
    $fields["icon"] = $item["icon"];
	$obj = new ga_badges_bll();
	$filter = array("id" => $fields["id"]);
	$update_items = array();
	if($fields["icon"] != "")
	  $update_items["icon"] = $fields["icon"];
	$obj->update($update_items,$filter);
}

echo json_encode(array('status' => 'success', 'message' => "file updated"));

?>