<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script>
		var earth = new Array();

		earth[0] = "korea";
		earth[1] = "china";

		document.write(earth[0]);
		document.write("<br>");
		document.write(earth[1]);
		document.write("<br><br>");
	</script>
</head>
<body>
	<?php
		//배열 선언
		$earth = array();

		$earth[0] = "korea";
		$earth[1] = "china";

		echo $earth[0];
		echo "<br>";
		echo $earth[1];
		echo "<br><br>";

		//인덱스 숫자뿐만 아니라 문자로도 지정이 가능합니다.
		$earth['city'] = 'seoul';

		echo $earth['city'];
	?>
</body>
</html>