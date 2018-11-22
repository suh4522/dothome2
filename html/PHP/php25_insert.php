<?php
		//mysql 접속 소스를 include
		include_once "../connectDB.php";

		//post 방식으로 전달 받은 값 확인
		echo "<pre>";
		var_dump($_POST);

		//이름 검증
		if($_POST['userName'] == '' || $_POST['userName'] == null){
			echo "해당 값을 사용할 수 없습니다. 1.name";
			exit;
		}
		$userName = $_POST['userName'];
		//앞 뒤 공백제거
		$userName = trim($userName);
		//쿼리문의 따옴표 처리를 위해 real_escape_string 메소드 사용
		$userName = $dbConnect->real_escape_string($userName);


		//아이디 검증
		if($_POST['userID'] == '' || $_POST['userID'] == null){
			echo "해당 값을 사용할 수 없습니다. 2.id";
			exit;
		}
		$userID = $_POST['userID'];
		$userID = trim($userID);
		$userID = $dbConnect->real_escape_string($userID);


		//비빌번호 검증
		if($_POST['userPW'] == '' || $_POST['userPW'] == null){
			echo "해당 값을 사용할 수 없습니다. 3.pw";
			exit;
		}

		$userPW = sha1("web".$_POST['userPW']);

		//
		if($_POST['userGender'] == 'm' || $_POST['userGender'] == 'w'){
			$userGender = $_POST['userGender'];
		} else {
			echo "해당 값을 사용할 수 없습니다. 4.userGender";
			exit;
		}

		//이메일 유효성 검사
		$emailCheck = filter_var($_POST['userEmail'], FILTER_VALIDATE_EMAIL);
		if($emailCheck == false){
			echo "해당 값을 사용할 수 없습니다. 5";
			exit;
		}
		
		$userEmail = $_POST['userEmail'];


		//쿼리문 작성
		$sql = "INSERT INTO myMember(useID, uname, upassword, email, gender) VALUES";
		$sql .= "('{$userID}', '{$userName}', '{$userPW}', '{$userEmail}', '{$userGender}')";

		//쿼리문 전송 및 전송값을 result 변수에 대입
		$result = $dbConnect->query($sql);

		if($result){
			echo "회원 가입 정보 입력 완료 (OK)";
		} else {
			echo "회원 가입 정보 입력 실패 (No)";
		}
?>