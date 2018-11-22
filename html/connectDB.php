<?php
		
		$host = "localhost";
		$user = "suh45222";
		$pw = "tmtis12a";
		$dbName = "suh45222";
		$dbConnect = new mysqli($host, $user, $pw, $dbName);
		$dbConnect->set_charset("utf8");

		if(mysqli_connect_errno()){
			echo "데이터베이스 접속 실패";
			echo mysqli_connect_errno();
		} else {

		}

?>