<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php

		//페이지의 모든 코드를 처리한 후 출력문을 처리하는 기능
		ob_start();

		//php 설정 항목 중 session.cookie_lifetime의 값을 가져와서 0이면 변경
		if(ini_get('session.cookie_lifetime') == 0){
			ini_set('session.cookie_lifetime', 10);
		}
		session_start();

		//세션 생성
		$_SESSION['mySession'] = 'web';

		if(isset($_SESSION['mySession'])){
			echo "세션 생성 완료 : {$_SESSION['mySession']}";
		} else {
			echo "세션 생성 실패";
		}

?>
</body>
</html>