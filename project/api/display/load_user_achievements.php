<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_user_achievements_query.php");
include_once("../../include/bll/ga_user_achievements_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$entity = new ga_user_achievements_query();
foreach($data as $item) {
	$entity->userid = $item["userid"];
	$entity->type = $item["type"];
	$entity->loadall = $item["loadall"];
	$entity->order = $item["order"];
}
$obj = new ga_user_achievements_bll();
$output = $obj->fetch_records($entity);
echo json_encode(array('Records' => $output));

?>