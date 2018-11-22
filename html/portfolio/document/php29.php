<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
		<?php

			//mysql 접속 소스를 include
			include_once "../connectDB.php";

			//성 배열 선언
			$familyName = array();

			//성 데이터 입력
			$familyName = ['김', '이', '박', '전', '황', '목', '송', '정', '노', '최', '조', '백', '윤', '양'];

			//이름 배열 선언
			$lastName = array();

			//이름 데이터 입력 
			$lastName = ['유리', '경민', '민수', '하루', '기욱', '태진', '미우', '창석', '상연', '해윤', '가연', '오리'];

			//성별 배열 선언
			$gender = ['m','w'];

			//테이블에 회원 정보 입력 성공 카운드
			$successCount = 0;

			//테이블에 회원 정보 임력 실패 카운드
			$failCount = 0;

			//insert문을 500회 작동시키기위한 for문
			for($i = 1; $i <= 500; $i++){
				//랜덤으로 성을 받음
				$numRandomFN = rand(0,count($familyName) - 1);
				//랜덤으로 이름을 받음
				$numRandomLN = rand(0,count($lastName) - 1);
				//랜덤으로 성별을 받음
				$userGender = $gender[rand(0,1)];
				//랜덤으로 비밀번호를 생성
				$userPw = sha1("suh".rand(1,1000));

				//랜덤으로 부여 받은 이름을 하나의 데이터로 합침
				$userName = $familyName[$numRandomFN].$lastName[$numRandomLN];

				//랜덤으로 아이디를 부여
				$userId = "suh".rand(1,999999);

				//랜덤으로 이메일을 부여
				$email = "suh".rand(1,9999999)."@naver.com";

				//데이터 입력
				$sql = "INSERT INTO myMember(useID, uname, upassword, gender, email, regTime) VALUES";
				$sql .= "('{$userId}', '{$userName}', '{$userPw}', '{$userGender}', '{$email}', now())";
				$result = $dbConnect->query($sql);

				if($result){
					$successCount++;
				} else {
					$failCount++;
				}
				
			}

			//반복문이 끝난 후 실행 결과
			echo "입력 성공 수 {$successCount}";
			echo "<br>";
			echo "입력 실패 수 {$failCount}";



		?>
</body>
</html>