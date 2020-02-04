<?php
header("Content-Type: application/json");
include_once("../../include/config.php");
$data = json_decode(file_get_contents('php://input'), true);
$fields = array();
foreach($data as $item) {
	$fields["icon"] = $item["icon"];
}
if (file_exists(UPLOAD_DIRECTORY_PATH . "" . $fields["icon"]))
    unlink(UPLOAD_DIRECTORY_PATH . "" . $fields["icon"]);
	
echo json_encode(array('status' => 'success', 'message' => "record removed"));

?>