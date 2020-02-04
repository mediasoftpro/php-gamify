<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_badges_query.php");
include_once("../../include/bll/ga_badges_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
foreach($data as $item) {
	$id = $item["id"]; // not required for max calculation
}
$obj = new ga_badges_bll();
$output = $obj->get_max_level();
echo json_encode(array('status' => 'success', 'level' => $output));

?>