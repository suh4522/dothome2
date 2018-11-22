<?php

		//mysql 접속 소스를 include
		include_once "../connectDB.php";

		//현재 페이지 값을 변수에 저장
		//$page = 1;

		//첫번째 뷰를 구하는 공식
		// $sql = "SELECT * FROM myMember LIMIT 0, 50"; 

		// 1. 페이지 = SELECT * FROM myMember LIMIT 0, 50
		// 2. 페이지 = SELECT * FROM myMember LIMIT 50, 50
		// 3. 페이지 = SELECT * FROM myMember LIMIT 100, 50
		// 4. 페이지 = SELECT * FROM myMember LIMIT 150, 50

		// $firstLimitValue = ($numView * 1) - 50;
		// $firstLimitValue = ($numView * 2) - 50;
		// $firstLimitValue = ($numView * 3) - 50;
		// $firstLimitValue = ($numView * 4) - 50;

		if(isset($_GET['page'])){
			$page = (int) $_GET['page'];
		} else {
			//페이지 값을 1로 초기화
			$page = 1;
		}


		if(isset($_GET['page'])){
			$page = (int) $_GET['page'];
		} else {
			//페이지 값을 1로 초기화
			$page = 1;
		}
		//화면에 출력할 레코드 수
		$numView = 50;

		//변수 page값에 따른 LIMIT의 첫 번째 값 계산
		$firstLimitValue = ($numView * $page) -$numView;

		$sql = "SELECT * FROM myMember LIMIT {$firstLimitValue}, {$numView}";
		$result = $dbConnect->query($sql);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>고객리스트</title>
</head>
<body>
	<h1>고객 리스트</h1>
	<style>
		table {width: 100%;}
		table td {border: 1px solid #ccc;}
	</style>	
	<table>
		<tr>
			<td>번호</td>
			<td>ID</td> 
			<td>이름</td> 
			<td>이메일</td> 
			<td>성별</td> 
			<td>가입일</td> 
		</tr>
		<?php
			for($i = 0; $i < $result->num_rows; $i++){
				$memberInfo = $result->fetch_array(MYSQLI_ASSOC);
		?>
				<tr>
					<td><?=$memberInfo['myMemberID'] ?></td>
					<td><?=$memberInfo['useID'] ?></td>
					<td><?=$memberInfo['uname'] ?></td>
					<td><?=$memberInfo['email'] ?></td>
					<td><?=$memberInfo['gender'] ?></td>
					<td><?=$memberInfo['regTime'] ?></td>		
				</tr>
		<?php } ?>
	</table>
</body>
</html>