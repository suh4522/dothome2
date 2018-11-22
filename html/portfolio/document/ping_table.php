<?php
	//mysql 접속 소스를 include
   //include_once "../connectDB.php";

   //테이블 생성을 위한 쿼리문
   $sql = "CREATE TABLE linkClickCount(";
   $sql .= "linkClickCountID INT UNSIGNED NOT NULL AUTO_INCREMENT,";
   $sql .= "linkNum INT UNSIGNED NOT NULL COMMENT '링크 고유 번호',";
   $sql .= "regTime DATETIME NOT NULL COMMENT '클릭한 시간',";
   $sql .= "PRIMARY KEY(linkClickCountID))";
   $sql .= "CHARSET=utf8 comment='링크 클릭 수 집계'";

   $res = $dbConnect->query($sql);
   if($res){
   		echo "yes";
   }else {
   		echo "no";
   }

?>