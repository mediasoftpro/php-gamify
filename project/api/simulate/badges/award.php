<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_core_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$obj = new ga_core_bll();
	$userid = $item["userid"];
    $badgeid = $item["badge_id"];
	$obj->trigger_item($userid, $badgeid);
}

echo json_encode(array('status' => 'success', 'message' => "item processed"));

?>