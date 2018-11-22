<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		ini_set('date.timezone','Asia/Seoul');
		
		//echo "2018년 8월 2일 11시 15분 14초의 타임스탬프는? <br>";
		//echo mktime(11, 15, 14, 8, 2, 2018);

		$startTime = mktime(11, 15, 14, 8, 2, 2018);

		$endTime = mktime(11, 20, 14, 8, 2, 2018);

		if($startTime <= time() && $endTime > time()){
			echo "지금은 수업시간입니다.";
		} else {
			echo "지금은 쉬는 시간입니다.";
		}
	?>
</body>
</html>