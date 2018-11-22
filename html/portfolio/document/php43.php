<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
<?php
		$filePathName = "./myFiles/largeRow.php";

		if(file_exists($filePathName)){
			$fp = fopen($filePathName, 'r');
			//읽어올 용량 설정
			$readByte = 512;
			if($fp){
				while (($fr = fgets($fp, $readByte))  != false) {
					echo $fr."<br>";
				}
			}
		}
		
?>
</body>
</html>