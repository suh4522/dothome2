<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php

		$filePathName = "./myFiles/largeRow.php";
		$content = $_POST['myInputText'];

		$fp = fopen($filePathName, 'w');
		if($fp){
			$fw = fwrite($fp, $content);
			if($fw){
				echo "파일쓰기 완료";
			}
		}

?>
</body>
</html>