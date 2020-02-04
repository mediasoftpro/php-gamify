<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_events_query.php");
include_once("../../include/bll/ga_events_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$entity = new ga_events_query();
foreach($data as $item) {
	if(isset($item["id"]))
	   $entity->id = $item["id"];
    $entity->loadall = $item["loadall"];
	$entity->category_id = $item["category_id"];
    $entity->order = $item["order"];
}
$obj = new ga_events_bll();
$output = $obj->fetch_records($entity);
echo json_encode(array('Records' => $output));

?>