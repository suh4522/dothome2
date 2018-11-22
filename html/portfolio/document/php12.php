<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$member = array();

		//member 배열에 0 인덱스를 생성하고 인덱스도 배열로 선언
		$member[0] = array();
		$member[0] ['name'] = '김순실';
		$member[0] ['userID'] = 'richcl';
		$member[0] ['email'] = 'richdle@naver.com';

		$member[1] = array();
		$member[1] ['name'] = '장영실';
		$member[1] ['userID'] = 'jang';
		$member[1] ['email'] = 'jang999@naver.com';

		$member[2] = array();
		$member[2] ['name'] = '김경민';
		$member[2] ['userID'] = 'kim';
		$member[2] ['email'] = 'jkim999@naver.com';

		$member[3] = array();
		$member[3] ['name'] = '김민수';
		$member[3] ['userID'] = 'sum';
		$member[3] ['email'] = 'sum9999@naver.com';

		for($i = 0; $i < count($member); $i++){
			echo $member[$i]['name']."<br>";
			echo $member[$i]['email']."<br>";
		}
	 ?>
</body>
</html>