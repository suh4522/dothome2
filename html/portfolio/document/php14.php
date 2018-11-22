<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$str = " 안녕하세요. ";

		echo "trim을 사용하지 않은 경우 <br>";
		echo "|".$str."|";

		echo "<br><br>";
		echo "trim을 사용한 경우 <br>";
		echo "|".trim($str)."|";
	?>
</body>
</html>