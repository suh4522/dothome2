<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$earth =  array();

		$earth['nation'][0] = 'korea';
		$earth['nation'][1] = 'america';
		$earth['nation'][2] = 'canada';
		$earth['nation'][3] = 'japan';
		$earth['nation'][4] = 'china';
		$earth['nation'][5] = 'france';

		//배열의 내용을 보여줍니다.
		var_dump($earth);

		 echo "<br><br>";
		 echo $earth['nation'][4];

	?>
</body>
</html>