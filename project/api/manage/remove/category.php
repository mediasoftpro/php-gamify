<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_categories_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["id"] = $item["id"];
}
$obj = new ga_categories_bll();
$obj->remove($fields["id"]);
	
echo json_encode(array('status' => 'success', 'message' => "record removed"));

?>