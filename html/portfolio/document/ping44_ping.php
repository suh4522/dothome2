<?php

	//mysql 접속 소스를 include
	include_once "../connectDB.php";

	$linkNum = (int) $_GET['linkNum'];

	if($linkNum == 0){
		exit;
	}

	$sql = "INSERT INTO linkClickCount(linkNum, regTime)";
	$sql .= "VALUES({$linkNum}, NOW())";
	$dbConnect->query($sql);
?>

