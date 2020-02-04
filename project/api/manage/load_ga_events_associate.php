<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
include_once("../../include/entity/ga_badge_event_query.php");
include_once("../../include/bll/ga_badge_events_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$entity = new ga_badge_event_query();
foreach($data as $item) {
	$entity->event_id = $item["event_id"];
}
$entity->order = "badge_id desc";
$obj = new ga_badge_events_bll();
$output = $obj->fetch_records($entity);
echo json_encode(array('Records' => $output));

?>