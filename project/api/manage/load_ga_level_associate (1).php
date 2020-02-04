<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_level_associate_query.php");
include_once("../../include/bll/ga_level_associate_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$entity = new ga_level_associate_query();
foreach($data as $item) {
	$entity->levelid = $item["levelid"];
}
$obj = new ga_level_associate_bll();
$output = $obj->fetch_records($entity);
echo json_encode(array('Records' => $output));

?>