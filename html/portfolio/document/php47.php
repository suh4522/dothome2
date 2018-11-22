<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
      session_start();

      //세션 생성
      $_SESSION['userId'] = 'suh4522';

      if(isset($_SESSION['userId'])){
         echo "세션 생성 완료 아이디 값 : {$_SESSION['userId']}";
      } else {
         echo "세션 생성 실패";
      }
   ?>
</body>
</html>