<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		//mysql 접속 소스를 include
		include_once "../connectDB.php";

		$sql = "SELECT uname, useID FROM myMember";
		$result = $dbConnect->query($sql);

		$numResult = $result->num_rows;      //레코드 수를 가져오는 명령어

		if($numResult != 0){

				for($i = 0; $i < $numResult; $i++ ){
					  $memberInfo = $result->fetch_array(MYSQLI_ASSOC);
					  echo "회원이름: ".$memberInfo['uname'].", 회원 ID: ".$memberInfo['useID']."<br>";
				}

		} else {
			echo "데이터가 없습니다.";
		}

?>
</body>
</html>