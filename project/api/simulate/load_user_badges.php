<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_user_badges_query.php");
include_once("../../include/bll/ga_user_badges_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$entity = new ga_user_badges_query();
foreach($data as $item) {
	$entity->userid = $item["userid"];
	$entity->type = $item["type"];
	$entity->loadall = $item["loadall"];
}

$entity->order = "badge_id desc";
$obj = new ga_user_badges_bll();
$output = $obj->fetch_records($entity);
echo json_encode(array('Records' => $output));

?>