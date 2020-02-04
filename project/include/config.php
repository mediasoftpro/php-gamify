<?php
error_reporting(E_ERROR | E_PARSE);
$root = dirname(dirname(__FILE__)) . '/';
define('ROOTPATH', $root);
define('INCLUDE_ROOT', ROOTPATH . "include/");
/* Define upload directory path */
define ('UPLOAD_DIRECTORY_PATH', ROOTPATH . "contents/badges/");

/* Define root domain path */
define('SITE_DOMAIN', 'http://localhost/gamify/'); 
/* Define site upload directo path for accessing */
define ('SITE_DIRECTORY_PATH', SITE_DOMAIN . "contents/member/");
?>