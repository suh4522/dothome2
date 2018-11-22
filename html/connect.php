<?php
		
		$host = "localhost";
		$user = "suh45222";
		$pw = "tmtis12a";
		$dbName = "suh45222";
		$dbconnect = new mysqli($host, $user, $pw, $dbName);
		$dbconnect->set_charset("utf8");

		if(mysqli_connect_errno()){
			echo "데이터베이스 접속 실패";
			echo mysqli_connect_errno();
		} else {
			
		}

?>