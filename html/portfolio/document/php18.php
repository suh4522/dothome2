<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$fileName = "devilcat.jpg";

		$execute = substr($fileName, -4, 4);

		if($execute == '.jpg' || $execute == '.png' || $execute == '.gif'){
			echo "업로드한 파일은 이미지 파일입니다.";
		} else {
			echo "업로드한 파일은 이미지 파일이 아닙니다.";
		}
	?>
</body>
</html>