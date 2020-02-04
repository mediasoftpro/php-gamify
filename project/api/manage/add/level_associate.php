<?php
header("Content-Type: application/json");
include_once("../../../include/config.php");
include_once("../../../include/bll/ga_level_associate_bll.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
$isremoved = false;
$obj = new ga_level_associate_bll();
foreach($data as $item) {
	$fields["levelid"] = $item["levelid"];
    $fields["rewardid"] = $item["rewardid"];
	$fields["description"] = $item["description"];
	if($isremoved) {
		$obj->remove($fields["levelid"]);
		$isremoved = true;
	}
	$obj->add($fields);
}

echo json_encode(array('status' => 'success', 'message' => "records added"));

?>