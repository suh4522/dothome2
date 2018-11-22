<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form name="update" method="post" action="php31_update.php">
		<label for="memberID">회원번호</label>
		<input type="memberID" name="memberID" id="memberID"/>
		<label for="cn">변경할 이름</label>
		<input type="text" name="cn" id="cn" placeholder="이름변경"/>
		<input type="submit" value="변경하기"/>
	</form>
</body>
</html>