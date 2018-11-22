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

		$myMemberID = 1;

		$sql = "SELECT * FROM myMember WHERE myMemberID = {$myMemberID}";
		$result = $dbConnect->query($sql);

		$memberInfo = $result->fetch_array(MYSQLI_ASSOC);

		echo "<pre>";
		var_dump($memberInfo);

		echo "회원번호가 {$myMemberID}번인 회원의 이름은 ".$memberInfo['uname'];

		//SELECT * FROM mymember WHERE myMemberID = 1	
?>
</body>
</html>