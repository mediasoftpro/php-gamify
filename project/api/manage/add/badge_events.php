<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_badge_events_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
$isremoved = false;
$obj = new ga_badge_events_bll();
foreach($data as $item) {
	$fields["event_id"] = $item["event_id"];
    $fields["badge_id"] = $item["badge_id"];
	
	if($isremoved) {
		$obj->remove($fields["event_id"]);
		$isremoved = true;
	}
	$obj->add($fields);
}

echo json_encode(array('status' => 'success', 'message' => "records added"));

?>