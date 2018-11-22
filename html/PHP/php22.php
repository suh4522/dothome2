<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		//http://suh45222.dothome.co.kr/PHP/php22.php?type=first&mobile=ok

		echo "GET['type']는 ".$_GET['type']."<br>";
		echo "GET['mobile']는 ".$_GET['mobile']."<br>";
	?>

	<h1>회원가입</h1>

	<form name="data" action="php22_post.php" method="post">
		<label for="email">email</label>
		<input type="email" name="email" id="email" placeholder="이메일주소입력"/>

		<label for="password">password</label>
		<input type="password" name="password" id="password" placeholder="비밀번호 입력"/>

		<input type="submit" value="전달"/>
	</form>
</body>
</html>